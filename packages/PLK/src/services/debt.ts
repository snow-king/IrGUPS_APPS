import { Book, Dogovor, User } from "../../../_shared/DTO";
import { openApi } from "../../../_shared/services/instance";

export const financialDebt = async (
  user: User,
  studId: number
): Promise<Array<Dogovor>> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/api/student/${studId}/dogovors`)
    .then((response: any) => response.data)
    .catch((error: any) => {
      if (error.response.status === 404) {
        return [];
      }
      if (error.response.status === 401) {
        return "Unauthorized";
      }
    });
};

export const literaryDebt = async (
  user: User,
  studId: number
): Promise<Array<Book>> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/api/student/${studId}/library/debt`)
    .then((response: any) => response.data)
    .catch((error: any) => {
      if (error.response.status === 404) {
        return [];
      }
      if (error.response.status === 401) {
        return "Unauthorized";
      }
    });
};
