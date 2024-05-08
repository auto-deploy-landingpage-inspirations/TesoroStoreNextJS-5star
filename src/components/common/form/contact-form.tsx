import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { toast } from "react-toastify";

interface ContactFormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormValues>();
	async function onSubmit(values: ContactFormValues) {
		console.log(values, "contact");
		try {
			// send data to the server
			const response = await axios.post('https://tesoro-backend.onrender.com/api/customer/contact', values);
			// const response = await axios.post('http://localhost:5055/api/customer/contact', values);

			console.log(response.data);
			toast.success("We've recorded your response, we will get back to you shortly");
			reset();
		} catch (error) {
			console.log(error);
			toast.error("Unable to record your response! Please mail us at support@tesorostore.in")
		}
	}
	const { t } = useTranslation();
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full mx-auto flex flex-col justify-center "
			noValidate
		>
			<div className="flex flex-col space-y-5">
				<div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
					<Input
						labelKey="forms:label-name-required"
						placeholderKey="forms:placeholder-name"
						{...register("name", { required: "forms:name-required" })}
						className="w-full md:w-1/2 "
						errorKey={errors.name?.message}
						variant="solid"
					/>
					<Input
						labelKey="forms:label-email-required"
						type="email"
						placeholderKey="forms:placeholder-email"
						{...register("email", {
							required: "forms:email-required",
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "forms:email-error",
							},
						})}
						className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
						errorKey={errors.email?.message}
						variant="solid"
					/>
				</div>
				<Input
					labelKey="forms:label-subject"
					{...register("subject", { required: "forms:name-subject" })}
					className="relative"
					placeholderKey="forms:placeholder-subject"
					errorKey={errors.subject?.message}
					variant="solid"
				/>
				<TextArea
					labelKey="forms:label-message"
					{...register("message")}
					className="relative mb-4"
					placeholderKey="forms:placeholder-message"
				/>
				<div className="relative">
					<Button
						type="submit"
						className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
					>
						{t("common:button-send-message") as string} 
					</Button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
