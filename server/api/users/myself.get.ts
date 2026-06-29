import { FetchError } from "ofetch";
import { UserMap } from "~/utils/types/api/map/UserMap";

export default defineEventHandler(async (event) => {
  const { externalBaseURL } = useRuntimeConfig();
  const session = await getUserSession(event);

  try {
    const result = await $fetch<UserMap>("/users/myself", {
      baseURL: externalBaseURL,
      method: "GET",
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return result;
  } catch (err) {
    var error = err as FetchError;

    throw createError({
      status: error.status,
      statusMessage: error.message,
      message: error.data.message,
    });
  }
});
