import React from "react";
import Image from "next/image";
import Link from "next/link";
import useLoginForm from "../../hooks/useLoginForm";
import { useForm, SubmitHandler } from "react-hook-form";

type IFormLogin = {
  username: String;
  password: String;
};

const Login = () => {
  const { register, handleSubmit } = useForm<IFormLogin>();
  const { mutationQuery, handleOnSubmit } = useLoginForm();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    console.log(data);
    handleOnSubmit(data);
  };
  return (
    <div className="flex min-h-full items-center justify-center h-screen  ">
      <div
        className=" h-screen w-3/5 flex items-center justify-center"
        style={{ background: "#054A91" }}
      >
        <Image
          src="/images/auth/welcome.svg"
          alt="welcome"
          width={700}
          height={590}
        />
      </div>
      <div
        className="flex justify-center items-center h-screen w-2/5 "
        style={{ background: "#DBE4EE" }}
      >
        <div className="w-3/5 my-5 h-4/5 ">
          <h1 className="text-5xl font-bold text-center mb-24">LOGO</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  className="block text-sm font-semibold"
                  style={{ color: "#054A91" }}
                >
                  Username or Email
                </label>
                <input
                  type="text"
                  className="bg-transparent w-full h-10 border-b-2 border-black border-black focus:outline-none focus:bg-slate-300"
                  placeholder="Type your username"
                  {...register("username")}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold"
                  style={{ color: "#054A91" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-transparent w-full h-10 border-b-2 border-black border-black focus:outline-none focus:bg-slate-300"
                  placeholder="Type your password"
                  {...register("password")}
                />
              </div>
              <div className="w-full text-right font-semibold">
                <Link href="/" style={{ color: "#3E7CB1" }}>
                  Forget Password?
                </Link>
              </div>
              <div className="mt-14">
                <button
                  className="rounded-full w-full h-[50px] text-white font-semibold"
                  style={{ backgroundColor: "#F17300" }}
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center mx-10 my-5">
            <span className="w-1/2">
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </span>
            <span className="mx-2">or</span>
            <span className="w-1/2">
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </span>
          </div>
          <button className="bg-transparant rounded-full w-full h-[50px] text-black font-semibold border-[1px] border-black border-black flex justify-center items-center">
            <Image
              src="/images/icons/Google svg.png"
              alt="google"
              width={30}
              height={30}
              className="mr-5"
            />
            Sign In with Google
          </button>

          <div className="text-center mt-10 font-semibold">
            <span style={{ color: "#3E7CB1" }}>New Lovebirds? </span>
            <Link href="/" style={{ color: "#F17300" }}>
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
