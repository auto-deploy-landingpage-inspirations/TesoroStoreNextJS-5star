import { Order } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchGuestOrder = async (_id: string) => {
    
    const { data } = await https.get(`${API_ENDPOINTS.GUEST_ORDER}${_id}`);
    return data;
    
};
export const useGuestOrderQuery = (id: string) => {
  return useQuery<Order, Error>([API_ENDPOINTS.GUEST_ORDER, id], () =>
    fetchGuestOrder(id)
  );
};
