import localFont from "next/font/local";
import "./globals.css";
import NavbarConsumidores from "@/components/page-components/consumidores/NavbarConsumidores";
import Footer from "@/components/page-components/principales/Footer";
import WhatsappBtn from "@/components/personalized-ui/WhatsappBtn";
import {ToastContainer} from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Garret Games",
  description: "Listado de ofertas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <ToastContainer/>
        <WhatsappBtn />
      </body>
    </html>
  );
}
