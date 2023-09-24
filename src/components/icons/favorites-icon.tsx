const FavoriteIcon = ({
	color = "#fcbfd0",
	width = "20px",
	height = "20px",
	className = "md:w-4 xl:w-5 md:h-4 xl:h-5",
}) => {
	return (
		<>
			<svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 256 256"><path fill={color} d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"/></svg>
		</>
	);
};

export default FavoriteIcon;
