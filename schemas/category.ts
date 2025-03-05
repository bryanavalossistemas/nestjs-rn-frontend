import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string().min(1),
});
export type Category = z.infer<typeof CategorySchema>;

export const CategoriesResponseSchema = z.tuple([
  z.array(CategorySchema),
  z.number(),
]);

export const CreateCategoryFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre de la categoría es obligatorio" }),
});
export type CreateCategoryForm = z.infer<typeof CreateCategoryFormSchema>;
