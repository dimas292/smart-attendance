import Navigation from "@/components/navlist/page";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Hero from "@/components/hero/page";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <main>
      <header
        className={
          poppins.className +
          " flex h-[65px] items-center justify-between px-18 border-b"
        }
      >
        <h1 className="font-bold">PT ZYX TBK.</h1>
        <Navigation />
        <Button className="font-bold ">Login</Button>
      </header>
      <content>
        <Hero />
      </content>
    </main>
  );
}
