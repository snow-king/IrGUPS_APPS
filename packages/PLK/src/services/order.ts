import { StudCard, User } from "../../../_shared/DTO";
import { openApi } from "../../../_shared/services/instance";

export const getOrders = async (user: User, studCard: StudCard) => {
  openApi.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  return await openApi
    .get(`/api/student/${studCard.id}/orders`)
    .then((response) => response.data);
};
