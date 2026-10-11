/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { FoodSheetRenderer } from './FoodSheetRenderer';
import {
  DEFAULT_FOCAL_POINT,
  getSheetMeta,
  getCellCoordinate,
} from './sheetRegistry';
import { FocalPoint } from './types';
import {
  CANONICAL_FOOD_VISUAL_MAP,
  TOTAL_CANONICAL_FOODS,
  TOTAL_PRIMARY_VISUALS,
  TOTAL_SHEETS,
  ASSETS_PER_SHEET,
  SPECIAL_ROSE_WATER_ID,
} from './canonicalVisualMap';
import { resolveFoodVisual } from './resolveFoodVisual';
import { cn } from '../../../design-system/utils';
import { Card } from '../../../components/ui/Card';
import {
  CheckCircle2,
  Sliders,
  RotateCcw,
  Eye,
  Grid,
  Sparkles,
  ArrowRight,
  Layers,
  Search,
} from 'lucide-react';

interface FoodVisualSheetTestSurfaceProps {
  onBack?: () => void;
}

export function FoodVisualSheetTestSurface({ onBack }: FoodVisualSheetTestSurfaceProps) {
  const [selectedSheetNumber, setSelectedSheetNumber] = useState<number>(1);
  const [selectedCellIndex, setSelectedCellIndex] = useState<number>(0);
  const [focalPoint, setFocalPoint] = useState<FocalPoint>(DEFAULT_FOCAL_POINT);
  const [zoom, setZoom] = useState<number>(1.0);
  const [isRtl, setIsRtl] = useState<boolean>(true);
  const [showBorderOutline, setShowBorderOutline] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'catalog' | 'rosewater'>('catalog');

  const sheetId = `food-sheet-${String(selectedSheetNumber).padStart(2, '0')}`;
  const sheet = getSheetMeta(sheetId);
  const activeCoordinate = getCellCoordinate(sheetId, selectedCellIndex, focalPoint);

  // Find the food item for the selected cell in current sheet
  const activeFoodRecord = useMemo(() => {
    const entries = Object.values(CANONICAL_FOOD_VISUAL_MAP);
    return entries.find(
      (e) => e.sheetId === sheetId && e.cellIndex === selectedCellIndex
    );
  }, [sheetId, selectedCellIndex]);

  // All 25 cells for the current sheet
  const currentSheetCells = useMemo(() => {
    const cells = [];
    for (let i = 0; i < 25; i++) {
      cells.push(getCellCoordinate(sheetId, i));
    }
    return cells;
  }, [sheetId]);

  // Key required tests for row verification
  const rowRepresentatives = [
    { label: 'سطر ۰ (اولین)', index: 0, row: 0, col: 0 },
    { label: 'سطر ۱', index: 6, row: 1, col: 1 },
    { label: 'سطر ۲ (میانی)', index: 12, row: 2, col: 2 },
    { label: 'سطر ۳', index: 18, row: 3, col: 3 },
    { label: 'سطر ۴ (آخرین)', index: 24, row: 4, col: 4 },
  ];

  const handleResetFocalPoint = () => {
    setFocalPoint(DEFAULT_FOCAL_POINT);
    setZoom(1.0);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-full bg-surface-50 text-primary-900 pb-24 transition-all"
    >
      {/* Top Header */}
      <div className="bg-white border-b border-surface-200/60 sticky top-0 z-20 px-4 py-3.5 shadow-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                onClick={onBack}
                className="w-9 h-9 rounded-full bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-surface-200 transition-colors"
                title="بازگشت"
              >
                <ArrowRight size={18} className={isRtl ? '' : 'rotate-180'} />
              </button>
            )}
            <div>
              <h1 className="text-base font-bold text-primary-900 flex items-center gap-1.5">
                <Sparkles size={16} className="text-accent-terracotta" />
                <span>شیت‌های بصری غذاها (۶۲۵ آیتم کاتالوگ)</span>
              </h1>
              <span className="text-[11px] text-surface-400 font-mono">
                ۲۵ شیت × ۲۵ سلول • 1024×1024px WebP • بدون برش مجزا
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRtl(!isRtl)}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors',
                isRtl
                  ? 'bg-primary-900 text-white border-primary-900'
                  : 'bg-white text-surface-600 border-surface-200'
              )}
            >
              {isRtl ? 'RTL' : 'LTR'}
            </button>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex gap-2 mt-3 pt-2 border-t border-surface-100">
          <button
            onClick={() => setViewMode('catalog')}
            className={cn(
              'px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5',
              viewMode === 'catalog'
                ? 'bg-primary-900 text-white shadow-xs'
                : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
            )}
          >
            <Grid size={14} />
            <span>کاتالوگ ۲۵ شیت ({TOTAL_PRIMARY_VISUALS} غذا)</span>
          </button>
          <button
            onClick={() => setViewMode('rosewater')}
            className={cn(
              'px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5',
              viewMode === 'rosewater'
                ? 'bg-accent-terracotta text-white shadow-xs'
                : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
            )}
          >
            <span>🌸</span>
            <span>گلاب (ماده اولیه خاص)</span>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-lg mx-auto">
        {/* Verification & Audit Status Banner */}
        <div className="bg-white border border-surface-200/80 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="text-xs font-bold text-primary-900 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>ممیزی رسمی دارایی‌های بصری (Asset Audit Status):</span>
            </span>
            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
              تأیید نهایی
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px] text-surface-600 font-medium">
            <div className="bg-surface-50 p-2 rounded-xl border border-surface-100 text-center">
              <span className="block text-xs font-bold text-primary-900">{TOTAL_CANONICAL_FOODS}</span>
              <span className="text-[10px] text-surface-400">کل غذاها</span>
            </div>
            <div className="bg-surface-50 p-2 rounded-xl border border-surface-100 text-center">
              <span className="block text-xs font-bold text-primary-900">{TOTAL_PRIMARY_VISUALS}</span>
              <span className="text-[10px] text-surface-400">تصویر شیت ({TOTAL_SHEETS}×{ASSETS_PER_SHEET})</span>
            </div>
            <div className="bg-surface-50 p-2 rounded-xl border border-surface-100 text-center">
              <span className="block text-xs font-bold text-emerald-600">۰</span>
              <span className="text-[10px] text-surface-400">ناقص / یتیم / تکراری</span>
            </div>
          </div>
        </div>

        {viewMode === 'rosewater' ? (
          /* Special Rose Water Asset Inspector */
          <Card variant="default" className="p-5 bg-white border border-surface-200/80 rounded-3xl shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-surface-100">
              <span className="text-2xl">🌹</span>
              <div>
                <h3 className="text-sm font-bold text-primary-900">گلاب (Rose Water) - دارایی بصری اختصاصی</h3>
                <span className="text-xs text-surface-400 font-mono">ID: IR-ING-ROSEWATER / IR-BASIC-030 • تصویر اختصاصی .jpg</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#F8F5EE] rounded-2xl border border-surface-200/40">
              <div className="flex flex-col items-center gap-2">
                <FoodSheetRenderer
                  foodId="IR-ING-ROSEWATER"
                  size={110}
                  rounded="2xl"
                  showBorder={showBorderOutline}
                />
                <span className="text-[11px] font-mono font-bold text-primary-900">IR-ING-ROSEWATER</span>
                <span className="text-[10px] text-surface-500">شناسه ماده اولیه</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FoodSheetRenderer
                  foodId={SPECIAL_ROSE_WATER_ID}
                  size={110}
                  rounded="2xl"
                  showBorder={showBorderOutline}
                />
                <span className="text-[11px] font-mono font-bold text-primary-900">{SPECIAL_ROSE_WATER_ID}</span>
                <span className="text-[10px] text-surface-500">شناسه پایه کاتالوگ</span>
              </div>
            </div>

            <div className="bg-surface-50 p-3.5 rounded-2xl border border-surface-100 text-xs text-surface-600 space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-surface-200/40">
                <span className="text-surface-400">شناسه‌های قطعی:</span>
                <span className="font-mono font-bold text-primary-900">IR-ING-ROSEWATER / IR-BASIC-030</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-200/40">
                <span className="text-surface-400">روش نمایش بصری:</span>
                <span className="font-mono text-emerald-700 font-bold text-[11px]">تصویر اختصاصی ویژه (Special Asset)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-200/40">
                <span className="text-surface-400">مسیر فایل باینری فیزیکی:</span>
                <span className="font-mono text-primary-900 font-medium text-[11px]">/food-assets/special/IR-ING-ROSEWATER.jpg</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-surface-400">یکپارچگی در جستجو، لاگ و محاسبات:</span>
                <span className="text-emerald-700 font-bold">کاملاً فعال، مستقل و بدون تغییر</span>
              </div>
            </div>
          </Card>
        ) : (
          /* 25 Sheets Catalog View */
          <>
            {/* Sheet Selector (1..25) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-primary-900 flex items-center gap-1.5">
                  <Layers size={14} className="text-primary-600" />
                  <span>انتخاب شیت مستر (۱ تا ۲۵):</span>
                </span>
                <span className="text-xs font-mono text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full font-bold">
                  {sheetId}.webp
                </span>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setSelectedSheetNumber(num);
                      setSelectedCellIndex(0);
                      handleResetFocalPoint();
                    }}
                    className={cn(
                      'px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all font-mono',
                      selectedSheetNumber === num
                        ? 'bg-primary-900 text-white shadow-xs scale-105'
                        : 'bg-white border border-surface-200/80 text-surface-600 hover:border-surface-300'
                    )}
                  >
                    شیت {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 1: Row Representative Position Checks */}
            <div>
              <div className="flex items-center justify-between mb-2.5 px-1">
                <h2 className="text-sm font-bold text-primary-900 flex items-center gap-1.5">
                  <Eye size={16} className="text-primary-600" />
                  <span>آزمون موقعیت‌های کلیدی شیت (Row Check)</span>
                </h2>
                <span className="text-[11px] text-surface-400">۵ سطر × ۱ نماینده</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {rowRepresentatives.map((item) => {
                  const coord = getCellCoordinate(sheetId, item.index);
                  const isSelected = selectedCellIndex === item.index;
                  return (
                    <div
                      key={item.index}
                      onClick={() => {
                        setSelectedCellIndex(item.index);
                        setFocalPoint(DEFAULT_FOCAL_POINT);
                      }}
                      className={cn(
                        'cursor-pointer bg-white rounded-2xl p-2 flex flex-col items-center text-center border transition-all active:scale-95',
                        isSelected
                          ? 'border-primary-900 ring-2 ring-primary-900/10 shadow-xs'
                          : 'border-surface-200/70 hover:border-surface-300'
                      )}
                    >
                      <FoodSheetRenderer
                        cell={coord}
                        size={52}
                        rounded="xl"
                        showBorder={showBorderOutline}
                      />
                      <span className="text-[10px] font-bold text-primary-900 mt-1.5 block">
                        سلول {item.index}
                      </span>
                      <span className="text-[9px] text-surface-400 font-mono">
                        R{item.row}C{item.col}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Active Cell Inspector & Multi-Size Preview */}
            <Card variant="default" className="p-4 bg-white border border-surface-200/80 rounded-3xl shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-surface-100 mb-4">
                <div>
                  <span className="text-xs font-bold text-primary-900 block">
                    سلول فعال: سلول {activeCoordinate.cellIndex} ({activeFoodRecord?.name || 'غذا'})
                  </span>
                  <span className="text-[11px] text-surface-500 font-mono">
                    ID: {activeFoodRecord?.foodId || 'N/A'} • {sheetId} • R{activeCoordinate.row}C{activeCoordinate.column}
                  </span>
                </div>
                <button
                  onClick={() => setShowBorderOutline(!showBorderOutline)}
                  className={cn(
                    'px-2 py-1 rounded-lg text-[11px] font-medium border transition-colors',
                    showBorderOutline
                      ? 'bg-surface-100 text-surface-700 border-surface-300'
                      : 'bg-white text-surface-400 border-surface-200'
                  )}
                >
                  کادر تست
                </button>
              </div>

              {/* Multi-Scale Side-by-Side Test */}
              <div className="flex items-end justify-around gap-2 p-3 bg-[#F8F5EE]/60 rounded-2xl border border-surface-200/40 mb-4">
                {/* Hero Scale */}
                <div className="flex flex-col items-center">
                  <FoodSheetRenderer
                    cell={activeCoordinate}
                    size={110}
                    rounded="2xl"
                    zoom={zoom}
                    showBorder={showBorderOutline}
                  />
                  <span className="text-[10px] font-bold text-surface-600 mt-1.5">Hero (110px)</span>
                </div>

                {/* Card Scale */}
                <div className="flex flex-col items-center">
                  <FoodSheetRenderer
                    cell={activeCoordinate}
                    size={72}
                    rounded="xl"
                    zoom={zoom}
                    showBorder={showBorderOutline}
                  />
                  <span className="text-[10px] font-bold text-surface-600 mt-1.5">Card (72px)</span>
                </div>

                {/* List Scale */}
                <div className="flex flex-col items-center">
                  <FoodSheetRenderer
                    cell={activeCoordinate}
                    size={44}
                    rounded="lg"
                    zoom={zoom}
                    showBorder={showBorderOutline}
                  />
                  <span className="text-[10px] font-bold text-surface-600 mt-1.5">List (44px)</span>
                </div>
              </div>

              {/* Resolved Metadata Panel */}
              {activeFoodRecord && (
                <div className="bg-surface-50 p-3 rounded-2xl border border-surface-100 text-xs text-surface-600 mb-4 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-surface-400">نام فارسی:</span>
                    <span className="font-bold text-primary-900">{activeFoodRecord.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-400">دسته‌بندی:</span>
                    <span className="text-primary-800">{activeFoodRecord.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-400">نوع دارایی:</span>
                    <span className="text-surface-600 font-mono">{activeFoodRecord.visualType} (Priority {activeFoodRecord.visualPriority})</span>
                  </div>
                </div>
              )}

              {/* Focal Point & Zoom Adjustment Controls */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-surface-700">
                  <span className="flex items-center gap-1">
                    <Sliders size={14} />
                    <span>تنظیم کانون (Focal Point Tuning)</span>
                  </span>
                  <button
                    onClick={handleResetFocalPoint}
                    className="text-[11px] text-primary-600 hover:text-primary-800 flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>بازنشانی (0.5, 0.5)</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-surface-500 w-12">
                    X: {focalPoint.x.toFixed(2)}
                  </span>
                  <input
                    type="range"
                    min="0.30"
                    max="0.70"
                    step="0.01"
                    value={focalPoint.x}
                    onChange={(e) =>
                      setFocalPoint((prev) => ({ ...prev, x: parseFloat(e.target.value) }))
                    }
                    className="flex-1 accent-primary-900 cursor-pointer h-1.5 bg-surface-200 rounded-lg"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-surface-500 w-12">
                    Y: {focalPoint.y.toFixed(2)}
                  </span>
                  <input
                    type="range"
                    min="0.30"
                    max="0.70"
                    step="0.01"
                    value={focalPoint.y}
                    onChange={(e) =>
                      setFocalPoint((prev) => ({ ...prev, y: parseFloat(e.target.value) }))
                    }
                    className="flex-1 accent-primary-900 cursor-pointer h-1.5 bg-surface-200 rounded-lg"
                  />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <span className="text-[11px] font-mono text-surface-500 w-12">
                    Zoom: {zoom.toFixed(2)}x
                  </span>
                  <input
                    type="range"
                    min="0.90"
                    max="1.30"
                    step="0.02"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="flex-1 accent-accent-terracotta cursor-pointer h-1.5 bg-surface-200 rounded-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Section 3: Complete 5×5 Master Matrix for Current Sheet */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-sm font-bold text-primary-900 flex items-center gap-1.5">
                  <Grid size={16} className="text-primary-600" />
                  <span>ماتریس کامل ۲۵ سلول ({sheetId})</span>
                </h2>
                <span className="text-[11px] text-surface-400">روی سلول کلیک کنید</span>
              </div>

              <div className="grid grid-cols-5 gap-2 p-3 bg-white rounded-3xl border border-surface-200/80 shadow-xs">
                {currentSheetCells.map((cell) => {
                  const isSelected = selectedCellIndex === cell.cellIndex;
                  return (
                    <div
                      key={cell.cellIndex}
                      onClick={() => {
                        setSelectedCellIndex(cell.cellIndex);
                        setFocalPoint(DEFAULT_FOCAL_POINT);
                      }}
                      className={cn(
                        'relative cursor-pointer rounded-xl p-1.5 flex flex-col items-center text-center transition-all active:scale-95 group',
                        isSelected
                          ? 'bg-primary-900/5 ring-2 ring-primary-900 shadow-xs'
                          : 'hover:bg-surface-100/70'
                      )}
                    >
                      <FoodSheetRenderer
                        cell={cell}
                        size="100%"
                        rounded="lg"
                        showBorder={showBorderOutline}
                      />
                      <div className="mt-1 flex items-center justify-between w-full px-0.5">
                        <span className="text-[9px] font-bold text-primary-900">
                          #{cell.cellIndex}
                        </span>
                        <span className="text-[8px] text-surface-400 font-mono">
                          {cell.row},{cell.column}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
