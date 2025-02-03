import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full h-20 bg-cyan-900">
      <div className="w-full px-4 md:px-0 md:w-10/12 mx-auto flex justify-between items-center">
        <Link href={"/reventa/ofertas-juegos"} className="rounded-full overflow-hidden">
          <Image
            src={"/images/logo-nuevo.png"}
            width={60}
            height={60}
            alt="Logo Garret Games"
          />
        </Link>
        <nav className={""}>
          <ul className="flex gap-5 flex-wrap text-white">
            <Link href={"/reventa/ofertas-juegos"}>
              <li>Ofertas</li>
            </Link>
            {/*<Link href={"/(pages)/formasdepago"}>*/}
            {/*  <li>Formas de pago</li>*/}
            {/*</Link>*/}
            <Link href={"/reventa/playstationplus"}>
              <li>PS Plus</li>
            </Link>
            <Link href={"/reventa/playstationplus-liquidacion"}>
              <li>Liquidación PS Plus</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
