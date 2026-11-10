"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  passwordSchema,
  type PasswordValues,
} from "@/lib/schemas/password-schema";

export default function SignupForm() {
  // مدیریت نمایش و مخفی کردن پسورد
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // مدیریت فرم و اعتبارسنجی
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordValues>({
    resolver: zodResolver(passwordSchema),
    criteriaMode: "all",
  });

  // دریافت داده‌های معتبر فرم
  const onSubmit = (data: PasswordValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium">
          Password
        </label>

        <div className="flex items-center rounded-md border border-stone-300 focus-within:border-stone-600">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="w-full bg-transparent px-3 py-2 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-3 text-xs text-stone-500 hover:text-stone-900"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <p className="mt-2 text-xs text-stone-500">
          At least 8 characters, including uppercase, lowercase, number, and
          special character.
        </p>

        {/* نمایش تمام خطاهای پسورد */}
        {errors.password?.types &&
          Object.values(errors.password.types)
            .flat()
            .filter((message): message is string => typeof message === "string")
            .map((message, index) => (
              <p key={index} className="mt-1 text-xs text-red-600">
                {message}
              </p>
            ))}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium"
        >
          Confirm Password
        </label>

        <div className="flex items-center rounded-md border border-stone-300 focus-within:border-stone-600">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            className="w-full bg-transparent px-3 py-2 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="px-3 text-xs text-stone-500 hover:text-stone-900"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
}
