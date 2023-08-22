import { z } from "zod";

export const userApiInput = z.object({
  userId: z.string().nonempty(),
  email: z.string().email(),
});
export const addFavoriteApiInput = z.object({
  identifier: z.string().nonempty(),
  cover: z.string().nonempty(),
  title: z.string().nonempty(),
  description: z.string(),
});
export const deleteFavoriteApiInput = z.object({
  identifier: z.string().nonempty(),
});
