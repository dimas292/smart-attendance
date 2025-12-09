"use client";

import Navigation from "@/components/navlist/page";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Hero from "@/components/hero/page";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [activeThem, setActiveThem] = useState("dark");

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

  return (
    <main>
      <header
        className={
          poppins.className +
          " flex h-[65px] items-center justify-between px-18 border-b sticky top-0 bg-background z-10"
        }
      >
        <h1 className="font-bold text-2xl">PT ZYX TBK.</h1>
        <Navigation />
        <div className="flex gap-4 items-center">
          <Switch
            onClick={() =>
              handleThemeChange(activeThem === "light" ? "dark" : "light")
            }
            checked={activeThem === "dark"}
            aria-label="Toggle theme"
          />
          <Button className="font-bold text-lg">Login</Button>
        </div>
      </header>
      <content>
        <Hero />
      </content>
    </main>
  );
}
