import { openApi } from "../../../_shared/services/instance";

export const getSchedule = async (groupId: number) => {
  return await openApi
    .get(`/api/studGroup/${groupId}/schedule`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
