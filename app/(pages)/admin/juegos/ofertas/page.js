import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import {cookies} from "next/headers";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import OfertaCard from "@/components/page-components/admin/ofertas/OfertaCard";

async function Ofertas() {
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosOferta("admin", cookie, true);
    console.log(resultado)
    if (!resultado.exito) return <>Error</>
    console.log(resultado)

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
                <h1 className="text-3xl font-bold tracking-tight">Ofertas de Juegos</h1>
                <Link href="/admin/juegos/ofertas/agregar">
                    <Button>
                        <Plus className="mr-2 h-4 w-4"/>
                        Crear oferta
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resultado.data.map((oferta) => (<OfertaCard oferta={oferta} key={oferta.id}/>))}
            </div>

                {/*<h2 className={"font-semibold"}>{resultado.titulo} | {resultado.termina}</h2>*/}
                {/*<p className={"italic"}>Ofertas disponibles {resultado.juegos.length}</p>*/}
                {/*<TablaJuegosOfertaAdmin ofertas={resultado}/>*/}
            </>
            )
            }

            export default Ofertas;