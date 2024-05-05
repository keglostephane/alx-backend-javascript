/// <reference path="crud.d.ts" />
import { RowElement, RowId } from "./interface";
import * as CRUD from "./crud";

let row: RowElement = {fisrtName: "Guillaume", lastName: "Salva"};
const newRowID: RowId = CRUD.insertRow(row);
const updateRow: RowElement = {fisrtName: "Guillaume", lastName: "Salva", age: 23};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
