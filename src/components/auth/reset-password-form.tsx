import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Logo from "@components/ui/logo";
import { useForm } from "react-hook-form";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import router, { useRouter } from "next/router";


type FormValues = {
    password: string;
    confirmPassword: string;
};

const defaultValues = {
    password: "",
    confirmPassword: ""
};

const ResetPasswordForm = () => {
    const {
		query: { slug },
	} = useRouter();
	const { t } = useTranslation();
	const { setModalView, openModal, closeModal } = useUI();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues,
	});

	function handleSignIn() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}



	const onSubmit = async(values: FormValues) => {
        const password = values.password;
        const confirmPassword = values.confirmPassword;

        if(password !== confirmPassword) { 
            toast("Passwords do not match", {
                type: "error",
            });
            return;
        }
		// Call the API to send the reset password link
		try {
			const response = await axios.put("http://localhost:5055/api/customer/reset-password", {
				newPassword: password,
                token: slug
			});
			toast("Reset password successfully", {
				type: "success",
			});
            setTimeout(() => {
                handleSignIn()
                router.push("/signin");
                // window.location.href = "/login";
            }, 1000)
			console.log(response.data, "response from customer reset password");
			// console.log(response.data, "response from customer reset password");
			
		} catch(err) {
			console.log("Failed to reset password", err)
			toast("Failed to reset password!", {
				type: "error",
			});
			// alert("Failed to send reset password link")
		}
	};

	return (
		<div className="py-6 px-5 sm:p-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
			<div className="text-center mb-9 pt-2.5">
				<div onClick={closeModal}>
					<Logo />
				</div>
				<p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
					{t("common:forgot-password-helper") as string}
				</p>
			</div>
			<form
				onSubmit={handleSubmit((data) => onSubmit(data))}
				className="flex flex-col justify-center"
				noValidate
			>
				<Input
					labelKey="password"
					type="password"
					variant="solid"
					className="mb-4"
					{...register("password", {
						required: "Password is required",
					})}
					errorKey={errors.password?.message}
				/>

<Input
					labelKey="confirm-password"
					type="password"
					variant="solid"
					className="mb-4"
					{...register("confirmPassword", {
						required: "Confirm Password is required",
					})}
					errorKey={errors.confirmPassword?.message}
				/>

				<Button type="submit" className="h-11 md:h-12 w-full mt-2">
					{t("Update Password") as string}
				</Button>
			</form>
			<div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
				<hr className="w-full border-gray-300" />
				<span className="absolute -top-2.5 px-2 bg-white">
					{t("common:text-or") as string}
				</span>
			</div>
			<div className="text-sm sm:text-base text-body text-center">
				{t("common:text-back-to") as string}{" "}
				<button
					type="button"
					className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
					onClick={handleSignIn}
				>
					{t("common:text-login") as string}
				</button>
			</div>
		</div>
	);
};

export default ResetPasswordForm;
