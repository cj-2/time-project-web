export const timeMinuteApi = () => ({
  delete: async (id: number) => {
    return useCustomFetch(false)<boolean>(`/minutes/${id}`, {
      method: "DELETE",
    });
  },
  post: async (dto: CreateTimeMinuteListDto, recordId: number) => {
    return useCustomFetch(false)<boolean>(`/minutes/list/${recordId}`, {
      method: "POST",
      body: dto,
    });
  },
});
