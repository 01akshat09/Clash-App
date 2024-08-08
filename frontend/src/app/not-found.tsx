import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image src="/notfound.svg" width={600} height={600} alt="404_img" />
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
