import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import {
	useUpdateUserMutation,
	UpdateUserType,
} from "@framework/customer/use-update-customer";
// import { RadioBox } from "@components/ui/radiobox";
import { useTranslation } from "next-i18next";

const defaultValues = {};
const PinCodeCheckForm: React.FC = () => {
	const { 
		// mutate: updateUser, 
		isLoading } = useUpdateUserMutation();
	const { t } = useTranslation();
	const {
		register,
		// handleSubmit,
		formState: { errors },
	} = useForm<UpdateUserType>({
		defaultValues,
	});
	// function onSubmit(input: UpdateUserType) {
	// 	updateUser(input);
	// }
    function handlePinCheck(e:any){
        console.log(e)
    }

	return (
		<motion.div
			layout
			initial="from"
			animate="to"
			exit="from"
			//@ts-ignore
			variants={fadeInTop(0.35)}
			className={`w-full flex flex-col`}
		>
			{/* <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("Check if PinCode Serviceable")}
			</h2> */}
			<form
				onSubmit={handlePinCheck}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-row">
					{/* <div className="flex items-center flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0"> */}
						<Input
							type="tel"
							// labelKey="forms:label-phone"
							{...register("phoneNumber", {
								required: "forms:phone-required",
							})}
							variant="solid"
							className="w-36 m-2"
                            placeholder="Pin Code"
							errorKey={errors.phoneNumber?.message}
						/>
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
                            variant="new"
							className="h-10 w-28 m-2 "
						>
							{t("Check") as string}
						</Button>
					{/* </div> */}
				</div>
                <p className="text-gray-400 text-xs ml-5">Check Pin Code*</p>
			</form>
		</motion.div>
	);
};

export default PinCodeCheckForm;
