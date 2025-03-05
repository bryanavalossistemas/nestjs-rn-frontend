"use server";

import { cookies } from "next/headers";
import { LoginForm } from "@/schemas/auth";

export async function login(formData: LoginForm) {
  const res = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error("Error al iniciar sesión");
  const json = await res.json();

  cookies().set({
    name: "session",
    value: json.access_token,
    httpOnly: true,
    path: "/",
  });
}

export async function logout() {
  cookies().delete("session");
}
