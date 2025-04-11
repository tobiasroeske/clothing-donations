import type { AnyFieldMeta } from "@tanstack/react-form";
import type { FC } from "react";
import type { ZodError } from "zod";

type FieldErrorsProps = {
  meta: AnyFieldMeta;
}

export const FieldErrors: FC<FieldErrorsProps> = ({ meta }) => {
  if (!meta.isTouched) return null
  return meta.errors.map(({ message }: ZodError, index) => (
    <p key={index} className="mt-0 text-sm font-medium text-destructive">
      {message}
    </p>
  ))
}