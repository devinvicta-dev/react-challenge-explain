import { z } from "zod";
import { SchemaValidationError } from "@/models/enums/form";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, SchemaValidationError.INVALID_MINIMAL_LENGTH)
    .email(SchemaValidationError.INVALID_EMAIL),
  password: z.string().min(6, SchemaValidationError.INVALID_PASSWORD),
});

export type SignInFormData = z.infer<typeof signInSchema>;
