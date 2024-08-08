import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center flex-col">
      <div className="flex justify-center items-center">
        <Image
          src="/banner.svg"
          alt="Banner"
          height={600}
          width={600}
          className="mt-10"
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-800 text-transparent bg-clip-text">
          Clash
        </h1>
        <p className="font-bold text-center text-2xl md:text-3xl lg:text-4xl text-slate-900">
          Discover the better choice
        </p>
        <Link href={"/login"}>
          <Button className="mt-3 text-lg bg-gradient-to-r from-purple-400 to-pink-800 mb-4">
            Start Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
