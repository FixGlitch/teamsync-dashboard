import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SparklesIcon, UsersIcon } from "lucide-react";
import { SliderButton } from "@/components/ui/slider";

export default function Hero() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative selection:bg-teal-400/30 selection:text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-fill object-center"
        />
      </div>

      <div className="relative z-10">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex flex-row items-center justify-center gap-2"
            >
              <UsersIcon className="w-6 h-6" />
              <span className="font-semibold">TeamSync</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Button
              imgSrc="/background-button.png"
              className="bg-gradient-to-b from-teal-200/80 to-teal-500/70 text-white rounded-full font-medium text-md transition-all hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:opacity-90 backdrop-blur-sm relative overflow-hidden border-teal-700 border-4 shadow-lg"
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              Try For Free
            </Button>
          </div>
        </nav>

        <main className="container mx-auto text-center pt-20 pb-32">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-500/20 to-gray-400/30 backdrop-blur-sm border border-teal-500/20 rounded-full gap-3 p-2 mb-12 ">
            <SliderButton defaultValue={[0]} max={100} step={1} href="/" />
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
              High-performing remote teams.
              <br />
              The future of work.
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful, self-serve team engagement tools and analytics.
              Supercharge your managers & keep employees engaged from anywhere.
            </p>
            <Button
              size="lg"
              imgSrc="/background-button.png"
              className="bg-gradient-to-b from-teal-200/80 to-teal-500/70 text-white px-8 py-6 rounded-full font-medium text-lg transition-all hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:opacity-90 backdrop-blur-sm relative overflow-hidden border-teal-700 border-4 shadow-lg"
            >
              <SparklesIcon className="w-5 h-5 mr-2 inline-block" />
              Try For Free
            </Button>
          </div>

          <div className="mt-24 space-y-6">
            <p className="text-gray-400">Trusted by 4,000+ companies</p>
            <div className="flex justify-center items-center gap-12 grayscale opacity-70">
              <Image
                src="/logo1.png"
                alt="Boltshift"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/logo2.png"
                alt="Lightbox"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/logo3.png"
                alt="FeatherDev"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/logo4.png"
                alt="GlobalBank"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
