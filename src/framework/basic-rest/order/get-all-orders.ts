import { QueryOptionsType, Order } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

interface OrderReturnType {
  orders: Order[];
  count: number;
}


export const fetchMyOrders = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const token = Cookies.get("auth_token");
  const {
    data
  } = await http.get(API_ENDPOINTS.MYORDER, {
    headers: {
      auth: token
    }
  });
  console.log("Order Data")
  console.log(data)
  return data as OrderReturnType
};
export const useMyOrdersQuery = (options: QueryOptionsType) => {
  return useQuery<OrderReturnType, Error>(
    [API_ENDPOINTS.ORDERS, options],
    fetchMyOrders
  );
};
