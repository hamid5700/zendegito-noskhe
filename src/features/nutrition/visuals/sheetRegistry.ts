/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SheetMeta, SheetCellCoordinate, FocalPoint } from './types';

export const DEFAULT_FOCAL_POINT: FocalPoint = { x: 0.5, y: 0.5 };

export const REGISTERED_SHEETS: Record<string, SheetMeta> = (() => {
  const sheets: Record<string, SheetMeta> = {};
  for (let i = 1; i <= 25; i++) {
    const id = `food-sheet-${String(i).padStart(2, '0')}`;
    sheets[id] = {
      id,
      name: `Food Master Sheet ${String(i).padStart(2, '0')} (5x5)`,
      url: `/food-assets/catalog/${id}.webp`,
      rows: 5,
      cols: 5,
      totalCells: 25,
      width: 1024,
      height: 1024,
    };
  }
  return sheets;
})();

export function getAllRegisteredSheets(): SheetMeta[] {
  return Object.values(REGISTERED_SHEETS);
}

/**
 * Returns sheet metadata for a given sheet ID. Defaults to 'food-sheet-01'.
 */
export function getSheetMeta(sheetId: string = 'food-sheet-01'): SheetMeta {
  return REGISTERED_SHEETS[sheetId] || REGISTERED_SHEETS['food-sheet-01'];
}

/**
 * Computes the 0-based coordinate for a specific cell index within a sheet.
 */
export function getCellCoordinate(
  sheetId: string = 'food-sheet-01',
  cellIndex: number,
  customFocalPoint?: Partial<FocalPoint>
): SheetCellCoordinate {
  const meta = getSheetMeta(sheetId);
  const clampedIndex = Math.max(0, Math.min(meta.totalCells - 1, cellIndex));
  const row = Math.floor(clampedIndex / meta.cols);
  const column = clampedIndex % meta.cols;

  return {
    sheetId: meta.id,
    row,
    column,
    cellIndex: clampedIndex,
    focalPoint: {
      x: customFocalPoint?.x ?? DEFAULT_FOCAL_POINT.x,
      y: customFocalPoint?.y ?? DEFAULT_FOCAL_POINT.y,
    },
  };
}

/**
 * Computes coordinate from zero-based row and column.
 */
export function getCoordinateFromRowCol(
  sheetId: string = 'food-sheet-01',
  row: number,
  column: number,
  customFocalPoint?: Partial<FocalPoint>
): SheetCellCoordinate {
  const meta = getSheetMeta(sheetId);
  const clampedRow = Math.max(0, Math.min(meta.rows - 1, row));
  const clampedCol = Math.max(0, Math.min(meta.cols - 1, column));
  const cellIndex = clampedRow * meta.cols + clampedCol;

  return {
    sheetId: meta.id,
    row: clampedRow,
    column: clampedCol,
    cellIndex,
    focalPoint: {
      x: customFocalPoint?.x ?? DEFAULT_FOCAL_POINT.x,
      y: customFocalPoint?.y ?? DEFAULT_FOCAL_POINT.y,
    },
  };
}

/**
 * Generates test mapping for all 25 cells of food-sheet-01
 * cell 0  → row 0, column 0
 * cell 1  → row 0, column 1
 * ...
 * cell 24 → row 4, column 4
 */
export function createTestSheet01Mapping(): SheetCellCoordinate[] {
  const meta = getSheetMeta('food-sheet-01');
  const cells: SheetCellCoordinate[] = [];
  for (let i = 0; i < meta.totalCells; i++) {
    cells.push(getCellCoordinate('food-sheet-01', i));
  }
  return cells;
}

export const TEST_SHEET_01_CELLS: SheetCellCoordinate[] = createTestSheet01Mapping();
