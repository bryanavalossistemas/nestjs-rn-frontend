"use server";

import { CategoriesResponseSchema } from "@/schemas/category";
import { CreateCategoryForm } from "@/schemas/category";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function fetchCategories(
  query: string,
  take: number,
  skip: number
) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const token = cookies().get("session")?.value;
  const res = await fetch(
    `${process.env.API_URL}/categories?query=${query}&take=${take}&skip=${skip}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error("Error al obtener las categorías");
  const json = await res.json();
  const data = CategoriesResponseSchema.parse(json);

  return data;
}

export async function createCategory(formData: CreateCategoryForm) {
  const token = cookies().get("session")?.value;
  const res = await fetch(`${process.env.API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error("Error al crear la categoría");
  revalidatePath("/dashboard/inventory/categories");
}
