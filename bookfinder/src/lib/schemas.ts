import { z } from "zod";

export const userApiInput = z.object({
  userId: z.string().nonempty(),
  email: z.string().email(),
});
export const addFavoriteApiInput = z.object({
  identifier: z.string().nonempty(),
  cover: z.string().nonempty(),
  title: z.string().nonempty(),
  author: z.array(z.string()).nonempty(),
  description: z.string(),
  sellerName: z.string().nonempty(),
  sellerBookId: z.string().nonempty(),
  price: z.number(),
  bookUrl: z.string().nonempty(),
});
export const deleteFavoriteApiInput = z.object({
  identifier: z.string().nonempty(),
});
export const checkFavoriteApiInput = z.object({
  sellerBookIds: z.array(z.string()).nonempty(),
});