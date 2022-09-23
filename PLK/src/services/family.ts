import {User} from "../../../_shared/DTO";
import {getPersonId} from "./person";
import {openApi} from "../../../_shared/services/instance";

export const searchFamily = async (user: User) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  const personId = await getPersonId(user);
  if (personId === "Unauthorized") return personId;
  return await openApi
    .get(`/api/family/${personId}`)
    .then((response) => response.data.family)
    .catch((error) => {
      if (error.response.status === 404) {
        return "Not Found";
      }
      if (error.response.status === 401) {
        return "Unauthorized";
      }
    });
};

export const getAccess = async (token: string, user: User) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  const personId = await getPersonId(user);
  const person = { token: token, ParentID: personId };
  return await openApi
    .post(`/api/family/create`, person)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 404) {
        return error.response.status;
      }
    });
};
