import {ParentDocument, User} from "../../../_shared/DTO";
import {getPersonId} from "./person";
import {openApi} from "../../../_shared/services/instance";

export const uploadFile = async (
  user: User,
  file: File,
  dataFile: ParentDocument
) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  let content = {
    file: file,
    ...dataFile,
  };
  return await openApi.post(`/api/parent/upload`, content).then((response) => {
    console.log(response);
    response.status;
  });
};
export const getDocuments = async (user: User, id?: string) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  const personId = id ? id : await getPersonId(user);
  return await openApi
    .get(`/api/parent/${personId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
export const delDocuments = async (user: User, id: number) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .delete(`/api/parent/${id}`)
    .then()
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};
