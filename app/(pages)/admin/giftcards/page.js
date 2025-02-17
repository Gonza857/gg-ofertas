import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import TablaJuegosStockAdmin from "@/components/page-components/admin/TablaJuegosStockAdmin";
import TablaTarjetasRegaloAdmin from "@/components/page-components/admin/TablaTarjetasRegaloAdmin";

const tarjetasHard = [
    {
        nombre: "PlayStation Gift Card 10 USD",
        region: "USA",
        precioCliente: 13000,
        precioReventa: 12000,
        imagen: "/images/psncard/psn10.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 25 USD",
        region: "USA",
        precioCliente: 32500,
        precioReventa: 30000,
        imagen: "/images/psncard/psn25.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 50 USD",
        region: "USA",
        precioCliente: 65000,
        precioReventa: 60000,
        imagen: "/images/psncard/psn50.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 60 USD",
        region: "USA",
        precioCliente: 78000,
        precioReventa: 72000,
        imagen: "/images/psncard/psn60.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 75 USD",
        region: "USA",
        precioCliente: 97500,
        precioReventa: 90000,
        imagen: "/images/psncard/psn75.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 100 USD",
        region: "USA",
        precioCliente: 130000,
        precioReventa: 120000,
        imagen: "/images/psncard/psn100.jpeg"
    },
    {
        nombre: "Steam Gift Card 10 USD",
        region: "ARG",
        precioCliente: 15000,
        precioReventa: 14000,
    },
    {
        nombre: "Steam Gift Card 25 USD",
        region: "ARG",
        precioCliente: 37500,
        precioReventa: 35000,
    },
    {
        nombre: "Steam Gift Card 50 USD",
        region: "ARG",
        precioCliente: 75000,
        precioReventa: 70000,
    },
    {
        nombre: "Steam Gift Card 60 USD",
        region: "ARG",
        precioCliente: 90000,
        precioReventa: 84000,
    },
    {
        nombre: "Steam Gift Card 70 USD",
        region: "ARG",
        precioCliente: 105000,
        precioReventa: 98000,
    },
    {
        nombre: "Steam Gift Card 75 USD",
        region: "ARG",
        precioCliente: 112500,
        precioReventa: 105000,
    },
    {
        nombre: "Steam Gift Card 100 USD",
        region: "ARG",
        precioCliente: 150000,
        precioReventa: 140000,
    }
];

async function TarjetasDeRegaloAdmin () {
    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 mx-auto p-2 md:p-0"}>
                <div className={"flex justify-center items-center relative mb-4"}>
                    <h1 className="text-xl md:text-2xl font-bold text-center w-fit self-center">
                        Juegos en Stock
                    </h1>
                    <Link href="/admin/stock/juegos/agregar" className={"absolute right-0 w-fit h-fit p-0 m-0"}>
                        <Button>
                            Agregar
                            <Plus/>
                        </Button>
                    </Link>
                </div>
                <TablaTarjetasRegaloAdmin tarjetas={tarjetasHard}/>
            </article>
        </main>
    )
}

export default TarjetasDeRegaloAdmin