import { useEffect, useState } from "react";

export default function ProductVariantSelector ({product, selectedVariant, setSelectedVariant, setVariantData, setImgToShow, setImagesToShow}) {
    const [optionDetailsDropdown, setOptionDetailsDropdown] = useState({});
    const variantTitle = product?.variantData;
    const variantOptions = product?.variants;
    console.log(variantOptions, "VariantOptions");

    const handleSelectVariant = (variantTitleOptions, optionId, index) => {
        const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
        // alert(optionDetails.name.en);
        alert(index);
        setImagesToShow(variantOptions[index].images);
        setImgToShow(variantOptions[index].images[0]);
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
                console.log(variantTitleOptions, "VariantTitleOptions")
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
                                console.log("find optionId: ", optionId, ", in variantTitleOptions: ", variantTitleOptions);
                                const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
                                console.log("optionDetails", optionDetails);
                                return (
                                    <div
                                        key={index}
                                        className={`w-20 h-20 mx-2 flex flex-col items-center justify-center cursor-pointer border ${selectedVariant === optionId && ('border-gray-700')} rounded transition-all duration-300 ease-in-out`}
                                        onClick={() => handleSelectVariant(variantTitleOptions, optionId, index)}
                                    >   
                                        <div
                                            className="w-16 h-16 rounded"
                                            style={{
                                                backgroundImage: `url(${option.images[0]})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                border: '1px solid #f7f7f7'
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
                                            console.log("selected value: ", event.target.value)
                                            handleSelectVariant(variantTitleOptions, event.target.value)
                                        }}
                                    >
                                        <option value="">Select</option>
                                        {variantOptions.map((option, index) => {
                                            const optionId = option[variantOptionId];
                                            console.log("find optionId: ", optionId, ", in variantTitleOptions: ", variantTitleOptions);
                                            const optionDetails = variantTitleOptions.filter(variant => variant._id === optionId)[0];
                                            console.log("optionDetails", optionDetails);
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