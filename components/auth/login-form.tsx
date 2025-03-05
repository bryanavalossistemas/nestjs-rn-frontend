"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginFormSchema, LoginForm as LoginFormType } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "@/api/auth";

export function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormType) {
    try {
      await login(values);
      router.push("/dashboard");
      toast.success("Sesión iniciada correctamente");
    } catch (_error) {
      toast.error("Error al iniciar sesión");
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Ingresa Con Tu Cuenta 🔐</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Ingrese sus credenciales a continuación para iniciar sesión en su
            cuenta
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="username" autoComplete="on" {...field} />
                </FormControl>
                {/* <FormDescription>
                  Escriba el nombre de la categoría
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="password" autoComplete="on" {...field} />
                </FormControl>
                {/* <FormDescription>
                  Escriba el nombre de la categoría
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Ingresar
          </Button>
        </div>
      </form>
    </Form>
  );
}
