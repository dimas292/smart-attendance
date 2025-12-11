"use client";

import Navigation from "@/components/navlist/page";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Hero from "@/components/hero/page";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import Features from "@/components/features/page";
import { motion, useScroll } from "motion/react"
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [activeThem, setActiveThem] = useState("dark");

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "system" || !savedTheme) {
      applySystemTheme();
      setActiveThem("system");
    } else {
      applyTheme(savedTheme);
      setActiveThem(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChangeSystemTheme = (e) => {
      if (activeThem === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChangeSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", handleChangeSystemTheme);
    };
  }, []);

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleThemeChange = (newTheme) => {
    console.log(newTheme);
    setActiveThem(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const applySystemTheme = () => {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isSystemDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const page = <main>
    <header
      className={
        poppins.className +
        " flex h-[65px] items-center justify-between px-18 border-b sticky top-0 bg-background z-999"
      }
    >
      <Link href="/" className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-500 cursor-pointer">PT ZYX TBK.</Link>
      <Navigation />
      <div className="flex gap-4 items-center">
        <Switch
          onClick={() =>
            handleThemeChange(activeThem === "light" ? "dark" : "light")
          }
          checked={activeThem === "dark"}
          aria-label="Toggle theme"
        />
        <Button className="font-bold text-lg bg-gradient-to-r from-primary  to-emerald-500 ">Login</Button>
      </div>
    </header>
    <content>
      <Hero />
      {/* glow 2 side primary and emerald */}
      <div
        className="absolute top-0 left-0 w-100 h-100 bg-gradient-to-tr from-primary to-emerald-400 
      rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-100 h-100 bg-gradient-to-tr from-emerald-400 to-primary 
      rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"
      ></div>
      <Features />
    </content>
  </main>

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          backgroundColor: "var(--primary)",
          transformOrigin: "0%",

        }}
      />
      {page}
    </>
  );
}
