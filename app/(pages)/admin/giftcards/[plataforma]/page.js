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
        nombre: "PlayStation Gift Card 70 USD",
        region: "USA",
        precioCliente: 91000,
        precioReventa: 84000,
        imagen: "/images/psncard/psn70.jpeg"
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
    }
];

async function TarjetasDeRegalo ({params}) {
    const tarjetas = []
    return (
        <main  className="styledMain">
            <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-4"}>
                <TablaTarjetasRegaloAdmin tarjetas={tarjetasHard}/>
            </article>
        </main>
    )
}

export default TarjetasDeRegalo;