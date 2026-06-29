export interface RecordLocalTableBusEvent {
  action: "delete" | "sync" | "bind" | "createFrom";
  data: RecordLocalTable;
}

export const TRL_TABLE_BUS_NAME = "time-record-local-table";
