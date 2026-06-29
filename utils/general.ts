export const updateRecordPageBreadcrumb = (title?: string) => {
  useConfigStore().setBreadcrumbPage([
    { label: "Tarefas", pageName: "record.panel" },
    { label: title || "Sem título" },
  ]);
};
