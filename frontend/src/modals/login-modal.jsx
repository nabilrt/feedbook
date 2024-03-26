import { useForm } from "react-hook-form";
import crossLogo from "../assets/cross.png";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth-apis";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
const LoginModal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }
  const [responseHandler, setResponseHandler] = useState({
    successMessage: "",
    errorMessage: "",
    loading: false,
  });
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: loginUser,
    onMutate() {
      setResponseHandler({ ...responseHandler, loading: true });
    },
    onError(error) {
      setResponseHandler({
        ...responseHandler,
        successMessage: "",
        errorMessage: error.message,
      });
    },
    onSuccess(data) {
      reset();
      localStorage.setItem("token", data.token);
      navigate("/user/feed");
    },
    onSettled() {
      setResponseHandler({ ...responseHandler, loading: false });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="fixed inset-0  flex  items-center justify-center rounded-md border  border-[#f5f0ff] bg-white bg-opacity-25 p-4 backdrop-blur-sm">
      <div className="m-auto flex flex-col w-1/4 space-y-1 rounded-md border-[#f5f0ff] bg-blue-100 p-4 ">
        <div className="ml-auto rounded-full bg-blue-200 p-1 hover:bg-blue-300 ">
          <img
            src={crossLogo}
            className="cursor-pointer"
            height={25}
            width={25}
            onClick={() => {
              reset();
              handleClose(!show);
            }}
          />
        </div>
        <form
          className="my-10  bg-blue-100 p-4 flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-2xl  text-[#03a1ef]">
            Login to{" "}
            <span className="tracking-wider font-semibold">FeedBook</span>
          </p>
          <div className="flex flex-col space-y-3">
            <div className="h-14">
              <input
                type="text"
                className="input-style"
                disabled={responseHandler.loading}
                placeholder="Email"
                {...register("email", {
                  required: "Email is Required",
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="h-14">
              <input
                type="password"
                className="input-style"
                disabled={responseHandler.loading}
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: "Password is Required",
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#03a1ef] text-white py-2 rounded-md hover:bg-blue-400"
            >
              {responseHandler.loading ? (
                <MoonLoader color="#ffffff" size={10} />
              ) : (
                "Login"
              )}
            </button>
            {responseHandler.errorMessage && (
              <p className="text-red-500 text-sm">
                {responseHandler.errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;
