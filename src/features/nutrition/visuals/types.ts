/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FocalPoint {
  x: number; // Normalized horizontal focal point: 0..1 (default: 0.5)
  y: number; // Normalized vertical focal point: 0..1 (default: 0.5)
}

export interface SheetCellCoordinate {
  sheetId: string;
  row: number; // 0-based row index (0..rows-1)
  column: number; // 0-based column index (0..cols-1)
  cellIndex: number; // 0-based cell index: row * cols + column
  focalPoint: FocalPoint;
  label?: string;
}

export interface SheetMeta {
  id: string;
  url: string;
  rows: number;
  cols: number;
  totalCells: number;
  width: number;
  height: number;
  name?: string;
}

export type FoodVisualKind = 'sheet' | 'special' | 'category_fallback' | 'placeholder';

export interface ResolvedFoodVisual {
  kind: FoodVisualKind;
  foodId: string;
  foodName?: string;
  category?: string;
  // Sheet-based sprite fields
  sheetId?: string;
  sheetUrl?: string;
  row?: number; // 0..4
  column?: number; // 0..4
  cellIndex?: number; // 0..24
  focalPoint?: FocalPoint;
  // Standalone image URL (for special assets like Rose Water)
  imageUrl?: string;
  // Fallback icon / emoji
  fallbackEmoji: string;
  // Metadata & flags
  isDedicated: boolean;
  isSpecial?: boolean;
}
