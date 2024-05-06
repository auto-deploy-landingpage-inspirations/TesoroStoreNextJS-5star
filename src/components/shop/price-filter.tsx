import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
const priceFilterItems = [
	{
		id: "1",
		name: "Under ₹500",
		slug: "0-500",
		min: 0,
		max: 500,
	},
	{
		id: "2",
		name: "₹500 to ₹1000",
		slug: "500-1000",
		min: 500,
		max: 1000,
	},
	{
		id: "3",
		name: "₹1000 to ₹1500",
		slug: "1000-1500",
		min: 1000,
		max: 1500,
	},
	{
		id: "4",
		name: "₹1500 to ₹2000",
		slug: "1500-2000",
		min: 1500,
		max: 2000,
	},
	{
		id: "5",
		name: "₹2000 to ₹3000",
		slug: "2000-3000",
		min: 2000,
		max: 3000,
	},
	{
		id: "6",
		name: "₹3000 to ₹5000",
		slug: "3000-5000",
		min: 3000,
		max: 5000,
	},
	{
		id: "7",
		name: "₹5000 to ₹10000",
		slug: "5000-10000",
		min: 5000,
		max: 10000,
	},
	{
		id: "8",
		name: "Over ₹10000",
		slug: "10000-",
		min: 10000,
		max: 999999,
	},
];


export const PriceFilter: React.FC = () => {
	const { t } = useTranslation("common");
	const router = useRouter();
	const { pathname, query } = router;
	const selectedPrices = query?.price ? (query.price as string).split(",") : [];
	
	const [formState, setFormState] = React.useState<string[]>(selectedPrices);
	React.useEffect(() => {
		setFormState(selectedPrices);
	}, [query?.price]);
	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;
		const index = priceFilterItems.findIndex((item) => item.slug === value);
		console.log("Form State: ")
		console.log(formState)
		console.log("Value: ", index);
		console.log("Max Value: ", priceFilterItems[index].max, "min value: ", priceFilterItems[index].min)
		let currentFormState = formState.includes(value)
			? formState.filter((i) => i !== value)
			: [...formState, value];
		// setFormState(currentFormState);
		const { price, ...restQuery } = query;
		// alert(`test, ${price}, ${value}`)
		// setProductPriceFilter({price: {maxPrice: priceFilterItems[index].max, minPrice: priceFilterItems[index].min}});
		router.push(
			{
				pathname,
				query: {
					...restQuery,
					...(!!currentFormState.length
						? { price: currentFormState.join(",") }
						: {}),
				},
			},
			undefined,
			{ scroll: false }
		);
	}
	const items = priceFilterItems;

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{t("text-price") as string}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{items?.map((item: any) => (
					<CheckBox
						key={item.id}
						label={item.name}
						name={item.name.toLowerCase()}
						checked={formState.includes(item.slug)}
						value={item.slug}
						onChange={handleItemClick}
					/>
				))}
			</div>
		</div>
	);
};
