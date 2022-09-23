import {Mark, User} from "../../../_shared/DTO";
import {openApi} from "../../../_shared/services/instance";

export const getMarks = async (
  user: User,
  id: number
): Promise<Array<Mark>> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/api/student/${id}/marks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.status === 404) {
        return "Not Found";
      }
      if (error.status === 401) {
        return "Unauthorized";
      }
    });
};
