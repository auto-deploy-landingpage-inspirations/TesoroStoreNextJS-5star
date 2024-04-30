import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import { Category } from "@framework/types";

export const fetchCategories = async (slug: string) => {
  try {
    const { data } = await https.get(`${API_ENDPOINTS.CATEGORY}${slug}`);
    return data;
  }  catch(err) {
    console.error("Failed to fetch categories:", err);
    throw err;
  }
  
};

export const useCategoriesQuery = (slug: string) => {
  return useQuery<Category[], Error>([API_ENDPOINTS.CATEGORIES],() => fetchCategories(slug));
};
// export { useCategoriesQuery, fetchCategories };