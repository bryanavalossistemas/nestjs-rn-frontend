"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  CreateCategoryForm as CreateCategoryFormType,
  CreateCategoryFormSchema,
} from "@/schemas/category";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createCategory } from "@/api/categories";

export default function CreateCategoryForm() {
  const router = useRouter();
  const form = useForm<CreateCategoryFormType>({
    resolver: zodResolver(CreateCategoryFormSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: CreateCategoryFormType) {
    try {
      await createCategory(values);
      router.push("/dashboard/inventory/categories");
      toast.success("Categoría creada correctamente");
    } catch (error) {
      toast.error("Error al crear la categoría");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Harinas" autoComplete="on" {...field} />
                </FormControl>
                {/* <FormDescription>
                  Escriba el nombre de la categoría
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-x-2 mt-2">
          <Button asChild variant="secondary">
            <Link href="/dashboard/inventory/categories">Cancelar</Link>
          </Button>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Crear
          </Button>
        </div>
      </form>
    </Form>
  );
}
