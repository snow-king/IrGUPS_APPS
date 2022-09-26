import {Person, User} from "../../../_shared/DTO";
import {openApi} from "../../../_shared/services/instance";

export const getPersonId = async (user: User): Promise<number | string> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/api/user/${user.id}/person`)
    .then((response) => response.data.data)
    .catch((error) => {
      if (error.response.status === 404) {
        return "Not Found";
      }
      if (error.response.status === 401) {
        return "Unauthorized";
      }
    });
};

export const getPerson = async (
  user: User,
  id?: string
): Promise<Person | string> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  const personId = id ? id : await getPersonId(user);
  return await openApi
    .get(`/api/person/${personId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return "Unauthorized";
      } else return "Not Found";
    });
};

export const updatePerson = async (
  user: User,
  person: Person
): Promise<number> => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .patch(`/api/person/${person.id}`, person)
    .then((response) => response.status);
};
