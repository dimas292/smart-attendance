import { Button } from "../ui/button";
import qr from "../../../public/qr.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-18 py-18 relative">
      <div className="z-0">
        <h2 className="font-bold text-3xl">Smart Attendance</h2>
        <h2 className="font-bold text-3xl">Made Simple</h2>
        <p className="py-4">
          Revolutionary QR code based attendance system that{" "}
          <p>streamlines workforce management for company ZYZ. Track</p>
          manage, and analyze attendance with unprecedented ease.
        </p>
        <div className="flex gap-4">
          <Button>Employee Dashboard</Button>
          <Button variant="outline">Operator Dashboard</Button>
        </div>
      </div>
      <aside className="flex flex-col z-3 shadow-xl rounded-xl absolute top-24 right-74 rotate-2">
        <div className="m-12">
          <div className="flex gap-4 items-center">
            <Image src={qr} alt="qr code" width={60} height={60} />
            <div>
              <h3 className="font-bold">QR Attendance</h3>
              <p>Scan & Go</p>
            </div>
          </div>

          <ul style={{ listStyleType: "disc" }} className="mt-4 ml-4">
            <li>Real-time tracking</li>
            <li>Instant notifications</li>
            <li>Analytics dashboard</li>
          </ul>
        </div>
      </aside>

      {/* Stats */}
      <section className="flex gap-8 items-center py-4">
            <div>
                  <h3 className="font-bold text-2xl">99.9%</h3>
                  <p className="text-sm">Accuracy</p>
            </div>
            <div>
                  <h3 className="font-bold text-2xl">5sec</h3>
                  <p className="text-sm">Check in Time</p>
            </div>
            <div>
                  <h3 className="font-bold text-2xl">22/7</h3>
                  <p className="text-sm">Monitoring</p>
            </div>
      </section>
    </section>
  );
}
