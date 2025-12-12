"use client";
import useStore from "@/app/global-state/store";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const isDark = useStore((state) => state.isDark);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" && !isDark) {
      document.documentElement.classList.add("dark");
      toggleTheme();
    } else if (savedTheme === "light" && isDark) {
      document.documentElement.classList.remove("dark");
      toggleTheme();
    }
  }, [isDark, toggleTheme]);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: hubungkan ke backend auth
    console.log({ username, password, remember });
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-linear-to-tr from-primary to-emerald-400 rounded-full opacity-30 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="hidden md:block absolute -bottom-24 -right-24 w-96 h-96 bg-linear-to-tr from-emerald-400 to-primary rounded-full opacity-30 blur-3xl animate-blob"
        aria-hidden
      />

      <Card className="flex flex-col md:flex-row items-center gap-6 max-w-3xl w-full">
        <CardContent className="w-full">
          <CardHeader className="px-0">
            <CardTitle className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-500">
              User Login
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Masuk menggunakan akun Anda untuk melanjutkan.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full max-w-md border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/30"
                placeholder="Masukkan username"
                aria-label="username"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full max-w-md border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/30"
                placeholder="Masukkan password"
                aria-label="password"
              />
            </div>
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full max-w-md bg-gradient-to-r from-primary to-emerald-500 text-xl font-bold"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
