import { Button } from "../ui/button";
import qr from "../../../public/qr.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl py-18 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-bold text-5xl ">Smart Attendance</h2>
        <h2 className="font-bold text-5xl text-primary">Made Simple</h2>
        <p className="py-8 text-xl">
          Revolutionary QR code based attendance system that{" "}
          <p>streamlines workforce management for company ZYZ. Track</p>
          manage, and analyze attendance with unprecedented ease.
        </p>
        <div className="flex gap-4">
          <Button className="h-12 w-52">Employee Dashboard</Button>
          <Button variant="outline" className="h-12 w-52 border-2 border-primary">Operator Dashboard</Button>
        </div>
      </div>
      {/* Benefit Card */}
      <aside className="flex flex-col z-20 rounded-xl absolute top-24 right-10 rotate-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <div className="mx-12 my-8">
          <div className="flex gap-4 items-center">
            <Image src={qr} alt="qr code" width={60} height={60} />
            <div>
              <h3 className="font-bold text-lg">QR Attendance</h3>
              <p className="text-lg">Scan & Go</p>
            </div>
          </div>

          <ul className="mt-4 ml-4 text-xl list-disc">
            <li>Real-time tracking</li>
            <li>Instant notifications</li>
            <li>Analytics dashboard</li>
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
