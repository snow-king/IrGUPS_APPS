import { User } from "../../../_shared/DTO";
import { openApi } from "../../../_shared/services/instance";

export const getDocuments = async (user: User) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/mfcu/documents/stats`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
