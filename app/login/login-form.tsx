"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

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
    <form className="grid gap-[18px]" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-2">
        <label className="text-xs font-semibold text-[#424849]" htmlFor="personaId">Persona ID</label>
        <input
          className="h-[45px] w-full rounded-[9px] border border-[#e4e7e3] bg-[#fdfdfc] px-[13px] text-[13px] text-ink placeholder:text-[#b0b5b2] transition-[border-color,box-shadow] focus:border-[#7c9e94] focus:outline-none focus:shadow-[0_0_0_3px_#426d6514] aria-[invalid=true]:border-[#bc7470]"
          id="personaId"
          autoComplete="username"
          placeholder="e.g. Persona22"
          aria-invalid={Boolean(errors.personaId)}
          aria-describedby={errors.personaId ? "persona-id-error" : undefined}
          {...register("personaId", { required: "Enter your Persona ID." })}
        />
        {errors.personaId && (
          <p className="m-0 text-xs text-red" id="persona-id-error">
            {errors.personaId.message}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold text-[#424849]" htmlFor="password">Password</label>
        <input
          className="h-[45px] w-full rounded-[9px] border border-[#e4e7e3] bg-[#fdfdfc] px-[13px] text-[13px] text-ink placeholder:text-[#b0b5b2] transition-[border-color,box-shadow] focus:border-[#7c9e94] focus:outline-none focus:shadow-[0_0_0_3px_#426d6514] aria-[invalid=true]:border-[#bc7470]"
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password", { required: "Enter your password." })}
        />
        {errors.password && (
          <p className="m-0 text-xs text-red" id="password-error">
            {errors.password.message}
          </p>
        )}
      </div>
      <button className="mt-[3px] flex h-[46px] cursor-pointer items-center justify-between rounded-[9px] border-0 bg-accent px-[15px] text-[13px] font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Please wait…" : "Continue"}
        <span className="text-[17px]" aria-hidden="true">→</span>
      </button>
      {notice && (
        <p className="m-0 text-center text-[11px] leading-[1.5] text-accent" role="status">
          {notice}
        </p>
      )}
      <p className="m-0 text-center text-[11px] leading-[1.5] text-[#909692]">
        New to Persona? Registration isn’t available yet.
      </p>
    </form>
  );
}
