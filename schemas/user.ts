import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
});
export const UserResponseSchema = UserSchema.omit({ password: true });

export type User = z.infer<typeof UserSchema>;

export type UserResponse = Omit<User, "password">;
