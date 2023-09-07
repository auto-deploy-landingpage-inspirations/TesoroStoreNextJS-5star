import cn from "classnames";
interface Props {
	className?: string;
	title: string;
	attributes: {
		id: number;
		value: string;
		meta: string;
	}[];
	active: string;
	onClick: any;
}

export const ProductAttributes: React.FC<Props> = ({
	className = "mb-4",
	title,
	attributes,
	active,
	onClick,
}) => {
	return (
		<div className={className}>
			<h3 className="text-base md:text-lg text-heading font-semibold mb-2 capitalize">
				{title}
			</h3>
			<ul className="colors flex flex-wrap -me-3">
				{attributes?.map(({ id, value, meta }) => (
					<li
						key={`${value}-${id}`}
						className={cn(
							"cursor-pointer rounded border border-gray-100 w-8 md:w-9 h-8 md:h-9 p-1 mb-2 md:mb-2 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
							{
								"border-black": value === active,
							}
						)}
						onClick={() => onClick({ [title]: value })}
					>
						{title === "color" ? (
							<span
								className="h-full w-full rounded block"
								style={{ backgroundColor: meta }}
							/>
						) : (
							value
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
