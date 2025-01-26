import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .max(20, { message: 'Password must be less than 20 characters' })
    .min(6, { message: 'Password must be more than 8 characters' }),
});

export const userValidations = {
  userValidationSchema,
};
