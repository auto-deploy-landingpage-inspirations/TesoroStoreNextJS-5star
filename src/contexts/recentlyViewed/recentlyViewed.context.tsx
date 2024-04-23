// import React from "react";
// import { useLocalStorage } from "@utils/use-local-storage";
// import { Product, getRecentlyViewedProducts } from "./recentlyViewed.utils";


// const addProductViewToLocalStorage = (product: Product) => {


// }

// const getAllRecentlyViewedProducts = () => {
//     const [products, saveProduct] = useLocalStorage(
//         'recently-viewed-products',
//         JSON.stringify([])
//     )
// }


export default function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}