"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Link from "next/link";

type LoginValues = { personaId: string; password: string };

export function LoginForm() {
  const [notice, setNotice] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>();
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
          {...register("personaId", { required: "Enter your Persona ID." })}
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
          {...register("password", { required: "Enter your password." })}
        />
        {errors.password && (
          <p className="text-sm text-red-700" id="password-error">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        className="
          flex items-center justify-between rounded bg-accent px-4 py-2 text-sm text-white
          hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70
        "
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Please wait…" : "Continue"}
        <span aria-hidden="true">→</span>
      </button>
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
