import { z } from "zod";

export const loginSchema = z.object({
  personaId: z.string().min(8, "Enter a valid Persona ID"),
  password: z.string().min(8, "Enter a valid Password"),
});

export type LoginValues = z.infer<typeof loginSchema>;
