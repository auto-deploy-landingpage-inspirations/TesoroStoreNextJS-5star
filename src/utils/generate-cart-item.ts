import isEmpty from "lodash/isEmpty";

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: string;
  price: number;
  sale_price?: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, attributes: object) {
  const { id, name, slug, image, price, sale_price, discount, variantId, isCombination } = item;
  return {
    id:  !isEmpty(attributes)
    ? `${id}.${Object.values(attributes).join(".")}`
    : id,
    name,
    attributeId: id,
    slug,
    discount: discount,
    image: image,
    price: sale_price ? sale_price : price,
    attributes,
    variantId: variantId,
    isCombination: isCombination
  };
}
