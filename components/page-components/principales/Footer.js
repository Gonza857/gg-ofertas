import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-900 py-8">
      {/* WRAPPER */}
      <div className="w-10/12 mx-auto flex flex-col md:flex-row flex-wrap gap-4 md:gap-0">
        <div className="w-full md:w-6/12 flex flex-col items-center justify-center gap-4 order-2 md:order-0">
          <Link href={"/public"} className="rounded-full overflow-hidden">
            <Image
              src={"/images/logo-nuevo.png"}
              width={150}
              height={150}
              alt="Logo Garret Games"
            />
          </Link>
          <p className="text-center">
            © Garret Games - 2024. Todos los derechos reservados
          </p>
        </div>
        <hr className="md:hidden order-1" />
        <div className="w-full md:w-6/12 flex flex-col gap-2 md:gap-4 items-center justify-center order-0 md:order-1">
          <p className="text-2xl font-semibold">Contacto</p>
          <a
            href="https://www.instagram.com/garret.games2_?igsh=N2NzYjlxaTNyNjN2"
            target="_blank"
            className="text-1xl"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5491132001372"
            target="_blank"
            className="text-1xl"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
