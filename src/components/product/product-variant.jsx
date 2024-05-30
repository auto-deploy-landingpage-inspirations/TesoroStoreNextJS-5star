import { useEffect, useState } from "react";

export default function ProductVariantSelector ({product, selectedVariant, setSelectedVariant, setVariantData, setImgToShow, setImagesToShow, setPrices, slabPrice, setVariantDesc, setStockLoading, setOutOfStock}) {
    const [optionDetailsDropdown, setOptionDetailsDropdown] = useState({});
    const taxPercent = product.taxPercent;
    const variantTitle = product?.variantData;
    const variantOptions = product?.variants;
    console.log(variantOptions, "VariantOptions");

    const handleSelectVariant = (variantTitleOptions, optionId, index=-1) => {
        const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
        // alert(optionDetails.name.en);
        // alert(index);
        if(optionDetails.quantity === 0){
            setStockLoading(false);
            setOutOfStock(true);
            return;
        }
        // console.log("index got: ", index);
        if(index !== -1){
            setImagesToShow(variantOptions[index].images);
            setImgToShow(variantOptions[index].images[0]);
            setVariantDesc(variantOptions[index].description);
            const finalPrice = variantOptions[index].originalPrice + slabPrice;
            const finalDiscountedPrice = variantOptions[index].price + slabPrice;
            const markedPrice = Math.round(finalPrice * (100 + taxPercent) / 100);
            const salePrice = Math.round(finalDiscountedPrice * (100 + taxPercent) / 100);
            const discount = markedPrice - salePrice;
            const prices = {
                finalPrice: finalPrice,
                finalDiscountedPrice: finalDiscountedPrice,
                markedPrice: markedPrice,
                salePrice: salePrice,
                discount: discount, 
            }
            if(variantOptions[index].quantity === 0){
                setOutOfStock(true);
                setStockLoading(false)
            } else {
                setOutOfStock(false);
                setStockLoading(false)
            }
            // alert(prices.finalPrice + " " + prices.finalDiscountedPrice + " " + prices.discount)
            setPrices(prices);
        }
        // alert(optionId);
        setSelectedVariant(optionId);
        setVariantData(optionDetails);
    }

    return (
        <div
            className="pb-3 border-b border-gray-300"
        >
            {variantTitle.map((variant, index) => {
                const variantOptionId = variant._id;
                const variantTitleOptions = variant.variants;
                // console.log(variantTitleOptions, "VariantTitleOptions")
                return (
                    <div
                        key={index}
                    >
                        <h1>{variant.name.en}</h1>
                        <div
                            className="flex"
                        >   
                            {variant.option == "Radio" && variantOptions.map((option, index) => {
                                const optionId = option[variantOptionId];
                                // console.log("find optionId: ", optionId, ", in variantTitleOptions: ", variantTitleOptions);
                                const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
                                // console.log("optionDetails", optionDetails);
                                return (
                                    <div
                                        key={index}
                                        className={`w-20 h-20 mx-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out`}
                                        onClick={() => handleSelectVariant(variantTitleOptions, optionId, index)}
                                    >   
                                        <div
                                            className={`w-16 h-16 ${selectedVariant === optionId && ('border-green-600 border-2')}`}
                                            style={{
                                                backgroundImage: `url(${option.images[0]})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                borderRadius: '50%',
                                                opacity: option.quantity === 0 ? 0.5 : 1
                                            }}
                                        >
                                        </div>
                                        <p className="text-sm">
                                            {optionDetails.name.en}
                                        </p>
                                    </div>
                                )
                            })}
                            {variant.option == "Dropdown" && (
                                <div className="">
                                    <select 
                                        onChange={(event) => {
                                            // console.log("selected value: ", event.target.value)
                                            handleSelectVariant(variantTitleOptions, event.target.value, 1);
                                            
                                        }}
                                    >
                                        <option value="">Select</option>
                                        {variantOptions.map((option, index) => {
                                            const optionId = option[variantOptionId];
                                            // console.log("find optionId: ", optionId, ", in variantTitleOptions: ", variantTitleOptions);
                                            const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
                                            // console.log("optionDetails", optionDetails);
                                            if(optionDetailsDropdown == {}){
                                                setOptionDetailsDropdown(optionDetails);
                                            }
                                            return (
                                                <option value={optionId}>{optionDetails.name.en}</option>
                                            )
                                        })}
                                        {/* <option value="">{variantTitleOptions[0].name.en}</option> */}
                                    </select>
                                </div>
                            
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}