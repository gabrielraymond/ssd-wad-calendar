import { useRouter } from "next/router";
import useMutationHook from "../../../shared/api/useMutationHook";
import { login } from "../../../shared/api/mutation/auth/login";
import Cookies from "js-cookie";
import { DASHBOARD_HOME } from "../../../shared/constants/Path";

/**
 * hook for login form
 * @returns {Object}
 */

const useLoginForm = () => {
  // let _email = '';
  const router = useRouter();

  const mutationQuery = useMutationHook({
    api: login,
    options: {
      onError: (error: any) => {
        console.log("error", error.toString());
        console.log("error from gabriel");
      },
      onSuccess: (data: any) => {
        console.log("success nih");
        Cookies.set("token", `${data.token}`);
        // console.log(data.data.token)
        router.replace(DASHBOARD_HOME);
      },
      throwOnError: () => {
        console.log("throw error");
      },
    },
  });

  // const token = Cookies.get('token');
  // token && router.replace(DASHBOARD_HOME)

  const handleOnSubmit = async (body: any) => {
    // _email = username;
    mutationQuery.mutate(body);
  };

  return {
    mutationQuery,
    handleOnSubmit,
  };
};

export default useLoginForm;
