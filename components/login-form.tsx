"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { loginSchema, type LoginValues } from "@/lib/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "./SubmitButton";

export function LoginForm() {
  const [notice, setNotice] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginValues> = async () => {
    // Deliberately isolated: this UI demo never sends, stores, or logs credentials.
    setNotice("This demo doesn’t sign you in yet.");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-1">
        <label className="text-sm" htmlFor="personaId">
          Persona ID
        </label>
        <input
          className="rounded border border-line bg-white px-3 py-2 text-sm"
          id="personaId"
          autoComplete="username"
          placeholder="e.g. Persona22"
          aria-invalid={Boolean(errors.personaId)}
          aria-describedby={errors.personaId ? "persona-id-error" : undefined}
          {...register("personaId")}
        />
        {errors.personaId && (
          <p className="text-sm text-red-700" id="persona-id-error">
            {errors.personaId.message}
          </p>
        )}
      </div>
      <div className="grid gap-1">
        <label className="text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="rounded border border-line bg-white px-3 py-2 text-sm"
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-700" id="password-error">
            {errors.password.message}
          </p>
        )}
      </div>
      <SubmitButton isSubmitting={isSubmitting}>Continue</SubmitButton>
      {notice && (
        <p className="text-center text-sm text-accent" role="status">
          {notice}
        </p>
      )}
      <p className="mx-auto w-full max-w-sm text-center text-sm text-stone-500">
        New to Persona?{" "}
        <Link href="/signup" className="text-stone-900 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
