import { yupResolver } from "@hookform/resolvers/yup";
import { LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import * as yup from "yup";

import logo from "@/assets/logo.PNG";

const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      console.log("Login payload:", data);
    } catch (error) {
      setError("root", {
        message: error?.response?.data?.message ?? "Invalid credentials",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mx-auto w-sm rounded-lg border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 text-center">
        <img
          src={logo}
          alt="MAGO TVTC"
          className="mx-auto h-10 object-contain"
        />

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Sign in to continue
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {errors.root && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {errors.root.message}
          </div>
        )}

        <div>
          <Label className="text-zinc-500" htmlFor="username">
            Username
          </Label>
          <TextInput
            id="username"
            type="text"
            placeholder="Enter your username"
            icon={Mail}
            color={errors.username ? "failure" : "gray"}
            {...register("username")}
          />
          {errors.username && (
            <p className="mt text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        <div>
          <div className=" flex items-center justify-between">
            <Label className="text-zinc-500" htmlFor="password">
              Password
            </Label>
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Enter your password"
            icon={LockKeyhole}
            color={errors.password ? "failure" : "gray"}
            {...register("password")}
          />
          {errors.password && (
            <p className="mt text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          size="lg"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
        <Link
          to="/forgot-password"
          className="text-sm text-emerald-600 hover:underline text-center"
        >
          Forgot Password?
        </Link>
      </form>
    </section>
  );
}

export default LoginPage;
