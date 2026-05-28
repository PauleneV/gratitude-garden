import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const gratitudeEntrySchema = z.object({
  content: z
    .string()
    .min(1, 'Please write something')
    .max(300, 'Maximum 300 characters allowed'),
});

export const profileUpdateSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type GratitudeEntryInput = z.infer<typeof gratitudeEntrySchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
