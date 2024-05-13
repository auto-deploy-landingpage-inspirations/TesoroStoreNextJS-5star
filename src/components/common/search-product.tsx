import Link from "@components/ui/link";
import Image from "next/image";
import { ROUTES } from "@utils/routes";

type SearchProductProps = {
	item: any;
};

const SearchProduct: React.FC<SearchProductProps> = ({ item }) => {

	return (
		<Link
			href={`${ROUTES.PRODUCT}/${item?.slug}`}
			className="group w-full h-auto flex justify-start items-center"
		>
			<div className="relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
				<Image
					src={
						item?.image[0] ?? "/assets/placeholder/search-product.svg"
					}
					width={96}
					height={96}
					loading="eager"
					alt={item.title.en || "Product Image"}
					className="bg-gray-200 object-cover"
				/>
			</div>
			<div className="flex flex-col w-full overflow-hidden">
				<h3 className="truncate text-sm text-heading mb-2 font-bold">{item.title.en}</h3>
				<div className="text-heading font-semibold text-sm">
					₹{item.prices.salePrice}/-{" "}
					<del className="ps-2 text-gray-400 font-normal">₹{item.prices.markedPrice}/-</del>
				</div>
			</div>
		</Link>
	);
};

export default SearchProduct;
