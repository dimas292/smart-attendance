"use client";
import useStore from "@/app/global-state/store";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginPage() {
  const isDark = useStore((state) => state.isDark);
  const toggleTheme = useStore((state) => state.toggleTheme);

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
      {/* glow 2 sides primary and emerald */}
      <div
        className="absolute top-0 left-0 w-100 h-100 bg-gradient-to-tr from-primary to-emerald-400 
      rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-100 h-100 bg-gradient-to-tr from-emerald-400 to-primary 
      rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"
      ></div>

      {/* login form container */}
      <div className="p-6 flex rounded-lg shadow-lg border ">
        {/* images */}
        <Image
          src={"/images/att.png"}
          alt="Login"
          width={300}
          height={300}
          className="rounded"
        />
        <div className="text-center mx-8">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-500 font-bold ">
            User Login
          </h2>
          <div className="flex flex-col gap-4 my-4">
            <input type="text" placeholder="username" className="p-1 rounded border" />
            <input type="password" className="p-1 rounded border" />
          </div>

          <p>Remember</p>
          <button>Login</button>
        </div>
        {/* form login */}
      </div>
    </div>
  );
}
