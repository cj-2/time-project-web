import type { ColumnDef } from "@tanstack/vue-table";
import Actions from "./Actions.vue";
import Col from "./Col.vue";

export const columns: ColumnDef<TimeRecordLocalTable>[] = [
  {
    accessorKey: "timeRecordDate",
    header: () => h("div", { variant: "ghost" }, ["Data"]),
  },
  {
    accessorKey: "periods",
    header: () => h("div", { variant: "ghost" }, ["Períodos"]),
    cell: ({ row }) =>
      h(
        "div",
        { class: "text-right" },
        h(Col, {
          label: periodLabel(row.original.periods.length),
          periods: row.original.periods,
        }),
      ),
  },
  {
    accessorKey: "formattedTime",
    header: () => h("div", { variant: "ghost" }, ["Tempo"]),
  },
  {
    accessorKey: "actions",
    header: () => h("div"),
    cell: ({ row }) =>
      h("div", { class: "text-right" }, h(Actions, { row: row.original })),
  },
];
