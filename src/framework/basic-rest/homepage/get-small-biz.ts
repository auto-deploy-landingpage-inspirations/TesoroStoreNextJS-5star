import { QueryOptionsType, SmallBIzStar } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

// interface result {
//     data: HomepageBanner,
//     message: string;
// }

export const fetchSmallBizStar = async () => {
//   const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await https.get(API_ENDPOINTS.SMALL_BIZ_STAR);
  console.log(data)
  return data.data[0] as SmallBIzStar ;
};
export const useHomePageBanner = (options: QueryOptionsType) => {
  return useQuery<SmallBIzStar, Error>(
    [API_ENDPOINTS.SMALL_BIZ_STAR, options],
    fetchSmallBizStar
  );
};
