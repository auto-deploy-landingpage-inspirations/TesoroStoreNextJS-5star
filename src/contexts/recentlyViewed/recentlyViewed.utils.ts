export interface Product {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    desc: number;
    finalPrice: number;
    finalDiscountedPrice: number;
    discount: number;
    viewedAt: string;
}

export function addViewedProduct(
    products: Product[],
    product: Product
) {
    const existingItemIndex = products.findIndex(
        (existingItem) => existingItem.id === product.id
    );

    if (existingItemIndex > -1) {
        const newItems = [...products];
        newItems[existingItemIndex].viewedAt = new Date().toISOString();
        return newItems;
    }
    return [...products, { ...product, viewedAt: new Date().toISOString() }];
}

export function getRecentlyViewedProducts(products: Product[], limit: number) {
    return products
        .sort((a, b) => new Date(b.viewedAt).getTime() - new Date(a.viewedAt).getTime())
        .slice(0, limit);
}