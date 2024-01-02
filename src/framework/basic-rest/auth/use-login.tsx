import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function login(input: LoginInputType) {
  const data = http.post(API_ENDPOINTS.LOGIN, input);
  console.log("Login Data REceiveD:")
  console.log(data)
  return data
  return {
    token: `${input.email}.${input.remember_me}`.split("").reverse().join(""),
  };
}
export const useLoginMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data);
      authorize();
      closeModal();
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
