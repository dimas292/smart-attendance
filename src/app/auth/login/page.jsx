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
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik";


export default function LoginPage() {
  const isDark = useStore((state) => state.isDark);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validationLoginScemema = Yup.object({
    username: Yup.string().min(6, "Username must be at least 6 characters").required("Username is required").max(20, "Username must be at most 20 characters"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required").matches(/[a-zA-Z]/, "Password must contain at least one letter").matches(/[0-9]/, "Password must contain at least one number"),
  })



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
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationLoginScemema}
            onSubmit={(values) => {
              console.log("Form data", values);
            }}>
            {({ isSubmitting }) => (
      
              <Form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="text-sm font-medium">
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="w-full max-w-md border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/30"
                    placeholder="Masukkan username"
                    aria-label="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="w-full max-w-md border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/30"
                    placeholder="Masukkan password"
                    aria-label="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full max-w-md bg-gradient-to-r from-primary to-emerald-500 text-xl font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
