import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full h-20 bg-cyan-900">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <Link href={"/"} className="rounded-full overflow-hidden">
          <Image
            src={"/images/logo-nuevo.png"}
            width={60}
            height={60}
            alt="Logo Garret Games"
          />
        </Link>
        <nav>
          <ul className="flex gap-5 flex-wrap">
            {/* <Link href={"/pages/ofertas"}>
              <li>Ofertas</li>
            </Link> */}
            <Link href={"/pages/formasdepago"}>
              <li>Formas de pago</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
