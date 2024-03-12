import { QueryKey } from "react-query";
import { ProductDetails, title } from "./product/get-product";

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Collection = {
  _id: string;
  description: title;
  name: title;
  slug: string;
  status: boolean;
  details?: string;
  image?: Attachment;
  icon?: string;
  children: Collection[];
  products?: Product[];
  productCount?: number;
  parentName?: string;
  parentId?: string;
};
export type Brand = {
  id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};
export type Product = {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  sale_price?: number;
  image: Attachment;
  sku?: string;
  gallery?: Attachment[];
  category?: Category;
  tag?: Tag[];
  meta?: any[];
  description?: string;
  variations?: object;
  [key: string]: unknown;
};
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderedProduct = {
  id: number | string;
  productName: string;
  variant: string;
  quantity: number;
  originalPrice: number;
  price: number;
  discount: number;
  store: string;
  slug?: string;
  image?: string;
}

export type OrderUserInfo = {
  name: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

export type OrderShipmentDetails = {
  length?: string | number;
  breadth?: string | number;
  height?: string | number;
  weight?: string | number;
}

export type courierDetails= {
  shipping_id?: String;
  awb_number?: String;
  courier_id?: String;
  courier_name?: String;
  label?: String;
}

export type Order = {
  _id: string | number;
  name: string;
  discount: number;
  invoice: string;
  orderId: string;
  cart: OrderedProduct[];
  shipping: number;
  confirmed: boolean;
  createdAt: string;
  paymentMethod: string;
  paymentStatus: boolean;
  status: string;
  subTotal: number;
  total: number;
  user: string;
  user_info: OrderUserInfo;
  ccavData: any;
  awb?: string;
  shipmentDetails?: OrderShipmentDetails;
  courierDetails?: courierDetails;
};

interface bannerType {
  _id: string;
  offerLink: string;
  imageRef: string;
  mobileImageRef: string;
  state: boolean;
}

export type HomepageBanner = {
  visible: boolean;
  productRef: string[] | ProductDetails[];
  categoryRef: string[];
  BlogLinkReference: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock: bannerType[];
}

export type FetchProducts = {
  visible: boolean;
  productRef: ProductDetails[];
  categoryRef: string[];
  BlogLinkReference?: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock?: bannerType[];
}

interface Categories{
  image: string,
  status: boolean,
  _id: string,
  name: title,
  description: title,
  parentId: string,
  parentName: string,
  icon: string,
  createdAt: string,
  updatedAt: string
}

export type FetchCategories = {
  visible: boolean;
  productRef: String[];
  categoryRef: Categories[];
  BlogLinkReference?: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock?: bannerType[];
}

export type categoryRef={
  image: string,
  status: boolean,
  _id: string,
  name: title,
  description: title,
  parentId: string,
  parentName: string,
  icon: string,
  createdAt: string,
  updatedAt: string,
  slug: string
}


interface storeDetails{
  subTitle: string,
  storeLink: string,
  description: string
}

export type SmallBIzStar = {
  storeDetails: storeDetails;
  visible: boolean;
  productRef: ProductDetails[];
  categoryRef: string[];
  BlogLinkReference?: string[];
  _id: string;
  sectionCode: string;
  sectionTitle: string;
  offerBlock?: bannerType[];
}