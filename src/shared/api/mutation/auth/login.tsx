import AxiosInstance from "../../axiosInstance";
import { LOGIN } from "../../../constants/endpoint";

interface User {
  username: string;
  password: string;
}

const login = async (data: any) => {
  console.log(data);
  const res = await AxiosInstance.post(LOGIN, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res?.data;
};

export { login };
