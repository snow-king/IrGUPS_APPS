import {DocumentDto, User} from "../../../_shared/DTO";
import { openApi } from "../../../_shared/services/instance";

export const getDocuments = async (user: User, ):Promise<Array<DocumentDto>> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .post(`/api/documents/stats`, {
        'status_id': 15,
        'dtype_id': 35,
        'month': 9,
        'year': 2022
    })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response?.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
