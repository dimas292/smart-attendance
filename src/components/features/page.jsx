import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { FEATURES } from "@/app/constant/features";
export default function Features() {
    return (
        <section id="features" className="mx-auto max-w-7xl py-18 relative overflow-hidden">
            <div className="relative z-10 text-center py-8">
                <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Powerfull Features</h2>
                <p className="py-8 text-xl">
                    Everything you need to manage attendance efficiently and effectively</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {FEATURES.map((feature) => (
                    <Card key={feature.id} className="p-6  transition-transform">
                        <Image src={feature.img} alt={feature.title} width={100} height={100} />
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                    </Card>
                ))}
            </div>
        </section>
    );
}