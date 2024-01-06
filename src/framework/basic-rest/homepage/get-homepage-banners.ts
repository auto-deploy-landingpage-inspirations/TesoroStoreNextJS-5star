import { QueryOptionsType, HomepageBanner } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

// interface result {
//     data: HomepageBanner,
//     message: string;
// }

export const fetchHomepageBanner = async () => {
//   const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await https.get(API_ENDPOINTS.HOMEPAGE_BANNER);
  console.log(data)
  return { banners: { data: data as HomepageBanner[] } };
};
export const useHomePageBanner = (options: QueryOptionsType) => {
  return useQuery<{ banners: { data: HomepageBanner[] } }, Error>(
    [API_ENDPOINTS.HOMEPAGE_BANNER, options],
    fetchHomepageBanner
  );
};
