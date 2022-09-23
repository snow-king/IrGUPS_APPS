import {openApi} from "../../../_shared/services/instance";

export const getUchplan = async (groupId: Number) => {
  return await openApi
    .get(`/api/studGroup/${groupId}/uchplan`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
