import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import { FetchCategories } from "@framework/types";

export const fetchCategories = async (slug: string) => {
    // console.log("Slug in Fetch Categories: ",slug)
  const { data } = await https.get(`${API_ENDPOINTS.CATEGORY}${slug}`);
  // console.log("fetchCategories:",data)
  return data;
};

export const useCategoriesQuery = (slug: string) => {
  return useQuery<FetchCategories, Error>([API_ENDPOINTS.CATEGORIES],() => fetchCategories(slug));
};
// export { useCategoriesQuery, fetchCategories };