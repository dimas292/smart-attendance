import { Button } from "../ui/button";
import BounceCards from "./cardBounce";

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl py-18 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-bold text-5xl ">Smart Attendance</h2>
        <h2 className="font-bold text-5xl text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-500">Made Simple</h2>
        <p className="py-8 text-xl">
          Revolutionary QR code based attendance system that <br />
          streamlines workforce management for company ZYX. Track <br />
          manage, and analyze attendance with unprecedented ease.
        </p>
        <div className="flex gap-4">
          <Button className="h-12 w-52 bg-gradient-to-r from-primary via-emerald-400 to-emerald-500 font-bold">Employee Dashboard</Button>
          <Button
            
            className="h-12 w-52 border-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-500 hover font-bold"
          >
            Operator Dashboard
          </Button>
        </div>
      </div>
      {/* Benefit Card */}
      <div className="absolute right-20 top-30">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
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
