/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SheetCellCoordinate, FocalPoint, ResolvedFoodVisual } from './types';
import { getSheetMeta, DEFAULT_FOCAL_POINT } from './sheetRegistry';
import { resolveFoodVisual } from './resolveFoodVisual';
import { cn } from '../../../design-system/utils';
import { GlassWater, CupSoda, Coffee, Soup, Apple, Utensils } from 'lucide-react';

export interface FoodSheetRendererProps {
  foodId?: string | null;
  visual?: ResolvedFoodVisual;
  cell?: SheetCellCoordinate;
  sheetId?: string;
  row?: number;
  column?: number;
  cellIndex?: number;
  focalPoint?: FocalPoint;
  size?: number | string; // e.g. 48, 80, 120, '100%'
  className?: string;
  alt?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  showBorder?: boolean;
  priority?: boolean;
  onClick?: () => void;
  // Optional micro-zoom (default: 1.0 = standard 1:1 cell scale)
  zoom?: number;
  fallbackEmoji?: string;
}

const ROUNDED_CLASSES: Record<NonNullable<FoodSheetRendererProps['rounded']>, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-[24px]',
  full: 'rounded-full',
};

/**
 * Clean neutral visual fallback component.
 * Ensures beverages and unmapped foods render clean, elegant icons
 * instead of inappropriate emoji icons (e.g. NEVER falling back to a tea emoji).
 */
interface FoodFallbackPlaceholderProps {
  category?: string;
  name?: string;
  size?: number | string;
  alt?: string;
  customEmoji?: string;
}

function FoodFallbackPlaceholder({
  category,
  name,
  size,
  alt,
  customEmoji,
}: FoodFallbackPlaceholderProps) {
  // If caller explicitly supplied a valid custom non-tea emoji, allow it
  if (customEmoji && customEmoji !== '☕' && customEmoji !== '🍵' && customEmoji !== '🍽') {
    return (
      <span className="text-2xl select-none" role="img" aria-label={alt}>
        {customEmoji}
      </span>
    );
  }

  // Calculate clean icon size proportional to container size
  let numericSize = 48;
  if (typeof size === 'number') {
    numericSize = size;
  } else if (typeof size === 'string' && size.endsWith('px')) {
    numericSize = parseInt(size, 10);
  }
  const iconSize = Math.max(16, Math.min(44, Math.round(numericSize * 0.44)));

  const isBeverage =
    category === 'نوشیدنی ها' ||
    category === 'نوشیدنی‌ها' ||
    Boolean(
      name &&
        (name.includes('آب') ||
          name.includes('نوشابه') ||
          name.includes('شربت') ||
          name.includes('چای') ||
          name.includes('قهوه') ||
          name.includes('اسپرسو') ||
          name.includes('لاته') ||
          name.includes('اسموتی') ||
          name.includes('دمنوش') ||
          name.includes('دوغ') ||
          name.includes('ماءالشعیر') ||
          name.includes('لیموناد'))
    );

  if (isBeverage) {
    if (
      name &&
      (name.includes('چای') ||
        name.includes('قهوه') ||
        name.includes('اسپرسو') ||
        name.includes('لاته') ||
        name.includes('کاپوچینو') ||
        name.includes('دمنوش'))
    ) {
      return (
        <Coffee
          size={iconSize}
          className="text-surface-400 stroke-[1.75]"
          aria-hidden="true"
        />
      );
    }
    if (name && (name.includes('نوشابه') || name.includes('لیموناد') || name.includes('گازدار'))) {
      return (
        <CupSoda
          size={iconSize}
          className="text-surface-400 stroke-[1.75]"
          aria-hidden="true"
        />
      );
    }
    return (
      <GlassWater
        size={iconSize}
        className="text-surface-400 stroke-[1.75]"
        aria-hidden="true"
      />
    );
  }

  if (category === 'آش و سوپ' || (name && (name.includes('سوپ') || name.includes('آش')))) {
    return (
      <Soup
        size={iconSize}
        className="text-surface-400 stroke-[1.75]"
        aria-hidden="true"
      />
    );
  }

  if (category === 'میوه ها' || category === 'میوه‌ها' || (name && name.includes('سیب'))) {
    return (
      <Apple
        size={iconSize}
        className="text-surface-400 stroke-[1.75]"
        aria-hidden="true"
      />
    );
  }

  return (
    <Utensils
      size={iconSize}
      className="text-surface-400 stroke-[1.75]"
      aria-hidden="true"
    />
  );
}

/**
 * Reusable Food Visual / Sheet Sprite Renderer
 *
 * Renders an individual food cell from a 5x5 master sprite sheet without cropping.
 * Uses exact CSS percentage offsets and container clipping to guarantee zero distortion
 * and preserve the original cream background, illustration, and aspect ratio.
 *
 * Also seamlessly handles:
 * - Direct Food ID resolution via canonical Food ID
 * - Standalone special assets (e.g. Rose Water / IR-ING-ROSEWATER / IR-BASIC-030)
 * - Clean neutral category placeholders for items without dedicated visuals
 * - Neutral placeholders for unknown foods
 */
export function FoodSheetRenderer({
  foodId,
  visual: propVisual,
  cell,
  sheetId: propSheetId,
  row: propRow,
  column: propColumn,
  cellIndex: propCellIndex,
  focalPoint: propFocalPoint,
  size,
  className,
  alt = 'تصویر غذا',
  rounded = '2xl',
  showBorder = false,
  priority = false,
  onClick,
  zoom = 1.0,
  fallbackEmoji: propFallbackEmoji,
}: FoodSheetRendererProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If foodId or visual provided, resolve visual
  const visual: ResolvedFoodVisual | undefined = propVisual || (foodId ? resolveFoodVisual(foodId) : undefined);

  // Determine rendering mode
  const isSpecial = visual?.kind === 'special' && Boolean(visual.imageUrl);
  const isFallback = visual?.kind === 'category_fallback' || visual?.kind === 'placeholder';

  // If it's a fallback item (no sheet and no special image), render fallback directly
  if (isFallback && !cell && !propSheetId) {
    const sizeStyle: React.CSSProperties =
      size !== undefined
        ? {
            width: typeof size === 'number' ? `${size}px` : size,
            height: typeof size === 'number' ? `${size}px` : size,
          }
        : {};

    return (
      <div
        dir="ltr"
        onClick={onClick}
        className={cn(
          'relative overflow-hidden aspect-square select-none shrink-0 flex items-center justify-center',
          'bg-[#F8F5EE]',
          ROUNDED_CLASSES[rounded],
          showBorder && 'border border-surface-200/80 shadow-xs',
          onClick && 'cursor-pointer hover:opacity-90 active:scale-95 transition-all',
          className
        )}
        style={sizeStyle}
      >
        <FoodFallbackPlaceholder
          category={visual?.category}
          name={visual?.foodName}
          size={size}
          alt={alt}
          customEmoji={propFallbackEmoji}
        />
      </div>
    );
  }

  // If it's a special standalone asset (e.g. Rose Water)
  if (isSpecial && visual?.imageUrl) {
    const sizeStyle: React.CSSProperties =
      size !== undefined
        ? {
            width: typeof size === 'number' ? `${size}px` : size,
            height: typeof size === 'number' ? `${size}px` : size,
          }
        : {};

    return (
      <div
        dir="ltr"
        onClick={onClick}
        className={cn(
          'relative overflow-hidden aspect-square select-none shrink-0 flex items-center justify-center',
          'bg-[#F8F5EE]',
          ROUNDED_CLASSES[rounded],
          showBorder && 'border border-surface-200/80 shadow-xs',
          onClick && 'cursor-pointer hover:opacity-90 active:scale-95 transition-all',
          className
        )}
        style={sizeStyle}
      >
        {!hasError ? (
          <img
            src={visual.imageUrl}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300 pointer-events-none',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />
        ) : (
          <FoodFallbackPlaceholder
            category={visual?.category}
            name={visual?.foodName}
            size={size}
            alt={alt}
            customEmoji={propFallbackEmoji}
          />
        )}
      </div>
    );
  }

  // Otherwise, render 5x5 Sheet Sprite
  const effectiveSheetId =
    cell?.sheetId ||
    propSheetId ||
    visual?.sheetId ||
    'food-sheet-01';

  const sheet = getSheetMeta(effectiveSheetId);
  const cols = sheet.cols;
  const rows = sheet.rows;

  // Resolve 0-based row and column
  let row = cell?.row ?? propRow ?? visual?.row;
  let col = cell?.column ?? propColumn ?? visual?.column;

  if (row === undefined || col === undefined) {
    const idx = cell?.cellIndex ?? propCellIndex ?? visual?.cellIndex ?? 0;
    const clampedIdx = Math.max(0, Math.min(sheet.totalCells - 1, idx));
    row = Math.floor(clampedIdx / cols);
    col = clampedIdx % cols;
  }

  // Focal point (normalized: 0..1, default: 0.5, 0.5)
  const focal = cell?.focalPoint ?? propFocalPoint ?? visual?.focalPoint ?? DEFAULT_FOCAL_POINT;
  const fx = focal.x ?? DEFAULT_FOCAL_POINT.x;
  const fy = focal.y ?? DEFAULT_FOCAL_POINT.y;

  // Precise percentage offsets
  const effectiveZoom = Math.max(0.8, Math.min(2.0, zoom));
  const leftPercent = -((col + (fx - 0.5)) * 100) * effectiveZoom + (effectiveZoom - 1) * 50;
  const topPercent = -((row + (fy - 0.5)) * 100) * effectiveZoom + (effectiveZoom - 1) * 50;
  const widthPercent = cols * 100 * effectiveZoom;
  const heightPercent = rows * 100 * effectiveZoom;

  const sizeStyle: React.CSSProperties =
    size !== undefined
      ? {
          width: typeof size === 'number' ? `${size}px` : size,
          height: typeof size === 'number' ? `${size}px` : size,
        }
      : {};

  return (
    <div
      dir="ltr" // Guarantees LTR coordinate orientation even inside RTL parent contexts
      onClick={onClick}
      className={cn(
        'relative overflow-hidden aspect-square select-none shrink-0 flex items-center justify-center',
        'bg-[#F8F5EE]', // Intentional cream backdrop matching master sheet artwork
        ROUNDED_CLASSES[rounded],
        showBorder && 'border border-surface-200/80 shadow-xs',
        onClick && 'cursor-pointer hover:opacity-90 active:scale-95 transition-all',
        className
      )}
      style={{
        ...sizeStyle,
        direction: 'ltr',
      }}
    >
      {!hasError ? (
        <img
          src={sheet.url}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'absolute max-w-none max-h-none pointer-events-none transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            width: `${widthPercent}%`,
            height: `${heightPercent}%`,
            left: `${leftPercent}%`,
            top: `${topPercent}%`,
            objectFit: 'fill',
          }}
        />
      ) : (
        <FoodFallbackPlaceholder
          category={visual?.category}
          name={visual?.foodName}
          size={size}
          alt={alt}
          customEmoji={propFallbackEmoji}
        />
      )}
    </div>
  );
}

/**
 * Convenient drop-in component for displaying any Food visual by Food ID
 */
export const FoodVisual = FoodSheetRenderer;
