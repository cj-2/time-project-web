export interface RecordTableBusEvent {
  action: "delete" | "edit" | "access";
  data: RecordTable;
}

export const TR_TABLE_BUS_NAME = "time-record-table";
