import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}

async function login(input: LoginInputType) {
  const data = await http.post(API_ENDPOINTS.LOGIN, input);
  // console.log("Login Data REceiveD:")
  // console.log(data['data'].token)
  if(data['data'].token){
    return data['data'].token
  } else {
    return false
  }
}
export const useLoginMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      if(data == false || data == undefined || data == null){
        toast("Invalid Credentials", {
          type: "error",
        });
        // login failed
      } else {
        Cookies.set("auth_token", data);
        toast("Login Success", {
          type: "success",
        });
        authorize();
        closeModal();
      }
    },
    onError: (data) => {
      toast("Failed to login", {
        type: "error",
      });
      console.log(data, "login error response");
    },
  });
};
