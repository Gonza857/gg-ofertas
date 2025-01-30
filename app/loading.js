import Image from "next/image";
import React from "react";

function loading() {
  return (
    <main className="pt-20 w-full min-h-screen flex items-center justify-center">
        <Image
            src={"/images/logo-nuevo.png"}
            alt="Vercel Logo"
            width={100}
            height={100}
            className="rounded-full animate-spin mx-auto"
        />
    </main>
  );
}

export default loading;
