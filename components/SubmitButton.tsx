import type { ReactNode } from "react";

type SubmitButtonProps = {
  children: ReactNode;
  isSubmitting: boolean;
};

export default function SubmitButton({
  children,
  isSubmitting,
}: SubmitButtonProps) {
  return (
    <button
      className="
  flex w-full items-center justify-between rounded bg-accent px-4 py-2 text-sm text-white
  hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70
"
      type="submit"
      disabled={isSubmitting} // isSubmitting وضعیت فرم رو مشخص می‌کنه و disabled بر اساس اون وضعیت، رفتار دکمه رو کنترل می‌کنه.
    >
      {isSubmitting ? "Please wait…" : children}
      <span aria-hidden="true">→</span>
    </button>
  );
}
