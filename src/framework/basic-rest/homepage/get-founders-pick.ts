import { FoundersPick } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

// interface result {
//     data: HomepageBanner,
//     message: string;
// }

export const fetchFoundersPick = async () => {
//   const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await https.get(API_ENDPOINTS.FOUNDERSPICK);
  // console.log("Inside Get Small Biz Star")
  // console.log(data)
  return data[0] as FoundersPick ;
};
export const useFoundersPick = () => {
  return useQuery<FoundersPick, Error>(
    [API_ENDPOINTS.FOUNDERSPICK],
    fetchFoundersPick
  );
};
