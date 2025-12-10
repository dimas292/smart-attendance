import { Button } from "../ui/button";
import qr from "../../../public/qr.png";
import Image from "next/image";
import dotOrange from "../../../public/dot_orange.svg";
import dotGreen from "../../../public/dot_green.svg";
import dotPurple from "../../../public/dot_purple.svg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl py-18 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-bold text-5xl ">Smart Attendance</h2>
        <h2 className="font-bold text-5xl text-primary">Made Simple</h2>
        <p className="py-8 text-xl">
          Revolutionary QR code based attendance system that <br />
          streamlines workforce management for company ZYX. Track <br />
          manage, and analyze attendance with unprecedented ease.
        </p>
        <div className="flex gap-4">
          <Button className="h-12 w-52">Employee Dashboard</Button>
          <Button
            variant="outline"
            className="h-12 w-52 border-2 border-primary"
          >
            Operator Dashboard
          </Button>
        </div>
      </div>
      {/* Benefit Card */}
      <aside
        className="flex flex-col z-20 rounded-xl absolute top-24 right-10 
      rotate-2 hover:rotate-6 transition-transform  bg-white/10 backdrop-blur-md 
      border border-white/20 shadow-lg"
      >
        <div className="mx-12 my-8">
          <div className="flex gap-4 items-center">
            <Image src={qr} alt="qr code" width={60} height={60} />
            <div>
              <h3 className="font-bold text-lg">QR Attendance</h3>
              <p className="text-lg">Scan & Go</p>
            </div>
          </div>

          <ul className="mt-4 ml-4 text-xl">
            <li className="flex "><Image src={dotOrange} alt="dot orange" width={40} height={40} /> Real-time tracking</li>
            <li className="flex "><Image src={dotGreen} alt="dot green" width={40} height={40} /> Instant notifications</li>
            <li className="flex "><Image src={dotPurple} alt="dot purple" width={40} height={40} /> Analytics dashboard</li>
          </ul>
        </div>
      </aside>

      {/* Stats */}
      <section className="flex gap-8 items-center py-8">
        <div>
          <h3 className="font-bold text-4xl text-primary">99.9%</h3>
          <p className="text-lg">Accuracy</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl text-primary">5sec</h3>
          <p className="text-lg">Check in Time</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl text-primary">22/7</h3>
          <p className="text-lg">Monitoring</p>
        </div>
      </section>
    </section>
  );
}
