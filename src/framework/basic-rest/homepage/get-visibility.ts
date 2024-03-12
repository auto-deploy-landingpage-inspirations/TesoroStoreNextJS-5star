import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchVisibility = async () => {
  const {
    data,
  } = await http.get(API_ENDPOINTS.HOMEPAGE_VISIBILITY);
  console.log(data);
  return data;
};
export const useVisibilityQuery = () => {
  return useQuery<any, Error>(
    [API_ENDPOINTS.ORDERS],
    fetchVisibility
  );
};
