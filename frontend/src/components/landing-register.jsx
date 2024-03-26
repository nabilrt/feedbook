import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/auth-apis";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

const LandingRegister = () => {
  const [responseHandler, setResponseHandler] = useState({
    successMessage: "",
    errorMessage: "",
    loading: false,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: registerUser,
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
      setResponseHandler({
        ...responseHandler,
        successMessage: `Welcome ${data.user.name}! Your account has been created successfully.`,
        errorMessage: "",
      });
    },
    onSettled() {
      setResponseHandler({ ...responseHandler, loading: false });
    },
  });

  const handleRegistration = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col space-y-3 justify-center items-center">
      <form
        className="my-10 border border-gray-300 bg-gray-100 p-4 flex flex-col space-y-4 rounded-md"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <p className="text-2xl font-semibold text-[#03a1ef]">Register</p>
        <div className="flex space-x-4 ">
          <div className="h-11">
            <input
              type="text"
              className="input-style"
              placeholder="First Name"
              name="first_name"
              disabled={responseHandler.loading}
              {...register("first_name", {
                required: "First Name is required",
              })}
            />
            {errors.first_name && (
              <p className="text-sm text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="h-11">
            <input
              type="text"
              className="input-style"
              placeholder="Last Name"
              name="last_name"
              disabled={responseHandler.loading}
              {...register("last_name", {
                required: "Last Name is required",
              })}
            />
            {errors.last_name && (
              <p className="text-sm text-red-500">{errors.last_name.message}</p>
            )}
          </div>
        </div>
        <div className="h-11">
          <input
            type="email"
            className="input-style"
            placeholder="Email"
            name="email"
            disabled={responseHandler.loading}
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="h-11">
          <input
            type="password"
            className="input-style"
            placeholder="Password"
            name="password"
            disabled={responseHandler.loading}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) ||
                  "Password must include lower, upper, number, and special characters"
                );
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="h-11">
          <input
            type="password"
            className="input-style"
            placeholder="Confirm Password"
            name="confirm_password"
            disabled={responseHandler.loading}
            {...register("confirm_password", {
              required: "Confirm Password is required",
              validate: (value) =>
                value ===
                  document.querySelector('input[name="password"]').value ||
                "Passwords do not match",
            })}
          />
          {errors.confirm_password && (
            <p className="text-sm text-red-500">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1 ">
          <label htmlFor="av" className="font-semibold">
            Profile Picture
          </label>
          <input
            type="file"
            name="avatar"
            id="av"
            className="input-style"
            {...register("avatar", {
              required: "Profile Picture is required",
            })}
          />
          {errors.avatar && (
            <p className="text-sm text-red-500">{errors.avatar.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#03a1ef] text-white py-2 rounded-md hover:bg-blue-600"
        >
          {responseHandler.loading ? (
            <MoonLoader color="#ffffff" size={10} />
          ) : (
            "Register"
          )}
        </button>
        {responseHandler.successMessage && (
          <p className="text-green-500 text-center">
            {responseHandler.successMessage}
          </p>
        )}
        {responseHandler.errorMessage && (
          <p className="text-red-500 text-center">
            {responseHandler.errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default LandingRegister;
