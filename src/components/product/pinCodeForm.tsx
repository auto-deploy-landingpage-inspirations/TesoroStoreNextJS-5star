import Button from "@components/ui/button";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
// import { RadioBox } from "@components/ui/radiobox";
import { useTranslation } from "next-i18next";
import React from "react";
import axios from "axios";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";

// const defaultValues = {};
const PinCodeCheckForm: React.FC = () => {

	const [pincodeValue, setPincodeValue] = React.useState<string>('');
	const [error, setError] = React.useState<string | null>(null);
	const [success, setSuccess] = React.useState<string | null>(null);
	
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const { t } = useTranslation();
	
    async function handlePinCheck(e:any){
		setIsLoading(true)
		e.preventDefault();

		const response = await axios.get(`${API_ENDPOINTS.XPRESSBEES_PINCODE}/${pincodeValue}`);
		if(response.data){
			if(response.data.check.status == true){
				setIsLoading(false)
				setSuccess("The pincode is Serviceable")
				setError(null)
			} else {
				setIsLoading(false)
				setError("The pincode is NOT Serviceable");
				setSuccess(null)
			}
		} else {
			setIsLoading(false)
			setError("Failed to check!")
			setSuccess(null)
		}
    }

	return (
		<motion.div
			layout
			initial="from"
			animate="to"
			exit="from"
			variants={fadeInTop(0.35)}
			className={`w-full flex flex-col`}
		>
			<form
				onSubmit={handlePinCheck}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-row">
					{/* <div className="flex items-center flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0"> */}
						<input
							type="tel"
							value={pincodeValue}
							onChange={(e) => setPincodeValue(e.target.value)}
							className="font-josephine w-36 m-2 px-2 py-1"
							style={{ border: "1px solid #D1D5DB" }}
                            placeholder="Pin Code"
						/>
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
                            variant="new"
							className="font-josephine h-10 w-28 m-2 "
						>
							{t("Check") as string}
						</Button>
					{/* </div> */}
				</div>
                <p className="font-josephine text-gray-400 text-xs ml-5">Check Pin Code*</p>
				{success!==null && (
					<p className="text-green-500">{success}</p>
				)}
				{error!==null && (
					<p className="text-red-500">{error}</p>
				)}
			</form>
		</motion.div>
	);
};

export default PinCodeCheckForm;
