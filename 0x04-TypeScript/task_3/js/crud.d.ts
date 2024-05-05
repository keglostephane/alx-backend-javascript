import { RowElement, RowId } from "./interface";

declare function insertRow(row:RowElement): RowId;
declare function deleteRow(rowId: RowId): void;
declare function updateRow(rowId: RowId, row: RowElement): RowId;