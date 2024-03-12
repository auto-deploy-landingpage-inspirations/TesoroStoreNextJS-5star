const dotenv = require('dotenv')
dotenv.config()
import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
// const jwt = require("jsonwebtoken")

export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
}

export interface response {
  data: {
    email: string,
    name: string,
    _id: string,
    token: string
  }
}
async function signUp(input: SignUpInputType):Promise<string> {
  try{
    // console.log(input)
    // const token = jwt.sign(JSON.stringify(input), "alamsfdfsdsdfsdfsdfsdfsdfsdrafdar!@#$0fddlfjdfdfdssfds")
    // console.log(token)
    const data:response =  await http.post(`${API_ENDPOINTS.REGISTER}fsfs`, input);
    // console.log("Sign up data received: ")
    // console.log(data)
    const token = data['data'].token;
    return token
0 }
catch(err){
  console.log(err)
  return err as string
}
  
  // return {
  //   token: `${input.email}.${input.name}`.split("").reverse().join(""),
  // };
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  // const data = fetch(`${API_ENDPOINTS.REGISTER}fsfs`, )
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data: string) => {
      if(data == undefined || data == null){
        toast("Failed to sign up", {
          type: "error",
        });
      }
      else {
        Cookies.set("auth_token", data);
        authorize();
        closeModal();
        toast("Sign Up Success", {
          type: "success",
        });
      }
    },
    onError: (data) => {
      toast("Failed to sign up", {
        type: "error",
      });
      console.log(data, "login error response");
    },
  });
};
