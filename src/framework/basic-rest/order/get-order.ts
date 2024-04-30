import { Order } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

export const fetchOrder = async (_id: string) => {
  const token = Cookies.get("auth_token");
  const { data } = await https.get(`${API_ENDPOINTS.ORDER}${_id}`, {
    headers: {
      auth: token
    }
  });
  console.log(data);
  return data;
};
export const useOrderQuery = (id: string) => {
  return useQuery<Order, Error>([API_ENDPOINTS.ORDER, id], () =>
    fetchOrder(id)
  );
};
