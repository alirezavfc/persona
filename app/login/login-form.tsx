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
    <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="personaId">Persona ID</label>
        <input
          id="personaId"
          autoComplete="username"
          placeholder="e.g. Persona22"
          aria-invalid={Boolean(errors.personaId)}
          aria-describedby={errors.personaId ? "persona-id-error" : undefined}
          {...register("personaId", { required: "Enter your Persona ID." })}
        />
        {errors.personaId && (
          <p className="field-error" id="persona-id-error">
            {errors.personaId.message}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password", { required: "Enter your password." })}
        />
        {errors.password && (
          <p className="field-error" id="password-error">
            {errors.password.message}
          </p>
        )}
      </div>
      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Please wait…" : "Continue"}
        <span aria-hidden="true">→</span>
      </button>
      {notice && (
        <p className="form-notice" role="status">
          {notice}
        </p>
      )}
      <p className="registration-note">
        New to Persona? Registration isn’t available yet.
      </p>
    </form>
  );
}
