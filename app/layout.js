import localFont from "next/font/local";
import {DM_Sans} from 'next/font/google'
import "./globals.css";
import NavbarConsumidores from "@/components/page-components/consumidores/NavbarConsumidores";
import Footer from "@/components/page-components/principales/Footer";
import WhatsappBtn from "@/components/personalized-ui/WhatsappBtn";
import {ToastContainer} from "react-toastify";
import {Analytics} from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Podés agregar más si querés
    variable: '--font-dmsans',     // Nombre de la variable CSS
    display: 'swap',
});

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
        {children}
        <Analytics/>
        <SpeedInsights/>
        <ToastContainer/>
        <WhatsappBtn/>
        </body>
        </html>
    );
}
