"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  passwordSchema,
  type PasswordValues,
} from "@/lib/schemas/password-schema";

type Account = {
  personaId: string;
  recoveryKey: string;
};

export default function SignupForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordValues>({
    resolver: zodResolver(passwordSchema),
    criteriaMode: "all",
  });

  // شبیه‌سازی ثبت‌نام موفق
  const onSubmit = async () => {
    setAccount({
      personaId: "persona43",
      recoveryKey: "mock-recovery-key-123456",
    });
  };

  // کپی کردن اطلاعات حساب
  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // در صورت ناموفق بودن کپی، مرورگر خطا را مدیریت می‌کند.
    }
  };

  // رفتن به صفحه اصلی
  const handleContinue = () => {
    router.push("/home");
  };

  // نمایش اطلاعات حساب پس از ثبت‌نام
  if (account) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="mb-2 font-serif text-2xl">Your account is ready.</h2>
          <p className="text-sm text-stone-600">
            Save your account details before continuing. Your recovery key will
            only be shown once.
          </p>
        </div>

        {/* Persona ID */}
        <div className="rounded-md border border-stone-300 p-4">
          <label className="mb-2 block text-xs font-medium text-stone-500">
            PERSONA ID
          </label>

          <div className="flex items-center justify-between gap-3">
            <code className="break-all text-sm">{account.personaId}</code>
            <button
              type="button"
              onClick={() => copyToClipboard(account.personaId)}
              className="shrink-0 text-xs text-stone-600 hover:text-stone-900"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Recovery Key */}
        <div className="rounded-md border border-stone-300 p-4">
          <label className="mb-2 block text-xs font-medium text-stone-500">
            RECOVERY KEY
          </label>

          <div className="flex items-center justify-between gap-3">
            <code className="break-all text-sm">{account.recoveryKey}</code>
            <button
              type="button"
              onClick={() => copyToClipboard(account.recoveryKey)}
              className="shrink-0 text-xs text-stone-600 hover:text-stone-900"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Recovery Key warning */}
        <div>
          <h3 className="mb-2 font-bold">
            Save your recovery key somewhere safe.
          </h3>
          <p className="text-sm text-red-700">
            Your recovery key is the only way to reset your password if you
            forget it. It cannot be recovered or displayed again. If you lose
            both your password and recovery key, you will permanently lose
            access to your account.
          </p>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="w-full rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-700"
        >
          Continue
        </button>
      </div>
    );
  }

  // فرم ثبت‌نام
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
            onClick={() => setShowPassword((prev) => !prev)}
            className="px-3 text-xs text-stone-500 hover:text-stone-900"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <p className="mt-2 text-xs text-stone-500">
          At least 8 characters, including uppercase, lowercase, number, and
          special character.
        </p>

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
            onClick={() => setShowConfirmPassword((prev) => !prev)}
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
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
