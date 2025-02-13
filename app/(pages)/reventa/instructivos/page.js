import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";

const instructivosData = [
    {
        nombre: "Primaria PS4",
        estiloBg: "bg-blue-300",
        estiloTexto: "text-blue-800",
        ruta: "/instructivos/primaria-ps4",
        imagenUrl: "/images/ps4.webp"
    },
    {
        nombre: "Secundaria PS4",
        estiloBg: "bg-blue-700",
        estiloTexto: "text-white",
        ruta: "/instructivos/secundaria-ps4",
        imagenUrl: "/images/ps4.webp"
    },
    {
        nombre: "Primaria PS5",
        estiloBg: "bg-gray-300",
        estiloTexto: "text-dark",
        ruta: "/instructivos/primaria-ps5",
        imagenUrl: "/images/ps5.webp"
    },
    {
        nombre: "Secundaria PS5",
        estiloBg: "bg-gray-500",
        estiloTexto: "text-white",
        ruta: "/instructivos/secundaria-ps5",
        imagenUrl: "/images/ps5.webp"
    },
    {
        nombre: "PlayStation Plus PS4",
        estiloBg: "bg-yellow-300",
        estiloTexto: "text-yellow-800",
        ruta: "/instructivos/playstationplus-ps4",
        imagenUrl: "/images/plus.jpg"
    },
    {
        nombre: "PlayStation Plus PS5",
        estiloBg: "bg-yellow-500",
        estiloTexto: "",
        ruta: "/instructivos/playstationplus-ps5",
        imagenUrl: "/images/plus.jpg"
    },
]

function Instructivos() {
    return (
        <main className={"styledMain px-2 pb-4"}>
            <h1 className={"text-2xl font-semibold text-center py-4 font-sans"}>Instructivos de instalacion</h1>
            <article className={"w-3/4 md:w-7/12 xl:w-5/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2"}>
                {instructivosData.map((e) => (
                    <Instructivo key={e.nombre} datos={e}/>
                ))}
            </article>
        </main>
    )
}

const Instructivo = ({datos}) => {
    return (
        <Link href={datos.ruta} className={"h-fit transition-all duration-200 hover:scale-105 cursor-pointer"}>
            <Card className={`relative overflow-hidden w-full mx-auto h-40 sm:h-32 flex justify-center items-center`}>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{backgroundImage: `url(${datos.imagenUrl})` }}
                    role="img"
                    aria-label={datos.nombre}
                />
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
                <CardContent className="relative z-20 p-6 text-white">
                    <h2 className={`p-0 text-xl`}>{datos.nombre}</h2>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Instructivos