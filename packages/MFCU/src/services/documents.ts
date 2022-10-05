import {DocumentDto, DocumentsFilter, DocumentsFilters, User} from "../../../_shared/DTO";
import { openApi } from "../../../_shared/services/instance";

export const getDocuments = async (user: User, filter : DocumentsFilter):Promise<Array<DocumentDto>|string> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .post(`/api/documents/getAll`, {
        'status_id': filter.status.value,
        'dtype_id': filter.type.value,
        'month': filter.month.value,
        'year': filter.year.value,
        'department': filter.departments.value,
    })
    .then((response) => response.data.data)
    .catch((error) => {
      if (error.response?.status === 401) {
        return "Unauthorized";
      } else if (error.response?.status === 404){
          return "Not Found"
      }
      return "Error: " + error.response.message;
    });
};
export const getFilters = async (user:User): Promise<DocumentsFilters> => {
    openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return await openApi.get('/api/documents/filters')
        .then((response) => response.data.data)
        .catch((error) =>{
            if (error.response?.status === 401) {
                return "Unauthorized";
            } else return "Not Found";
        })
}
