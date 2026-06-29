<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  name: "users",
});
useHead({ title: "Usuários" });
useConfigStore().setBreadcrumbPage([{ label: "Usuários" }]);

const userStore = useUserStore();

const modal = reactive({
  user: false,
});

const handleDelete = async (user: UserMap) => {
  try {
    await userStore.delete(user.userId);
  } catch (error) {
    ErrorToast(error);
  }
};
</script>

<template>
  <NuxtLayout name="panel">
    <UserTable @create="modal.user = true" @delete="handleDelete" />
  </NuxtLayout>
</template>
