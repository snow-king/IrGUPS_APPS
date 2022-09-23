import {Country} from "../../../_shared/DTO";
import {openApi} from "../../../_shared/services/instance";

export const countries = async () => {
  return await openApi
    .get(`/api/country/all`)
    .then((response) =>
      response.data.map((data: Country) => {
        return { id: data.id, name: data.name };
      })
    )
    .catch((error) => {
      if (error.response.status === 401) {
        return error.response.status;
      }
    });
};
export const getCountry = async (id: number): Promise<Country> => {
  return await openApi
    .get(` /api/country/${id}`)
    .then((response) => response.data.data);
};
