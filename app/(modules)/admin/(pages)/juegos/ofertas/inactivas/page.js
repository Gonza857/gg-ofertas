import {
    obtenerJuegosOferta,
    obtenerJuegosOfertaActivos,
    obtenerJuegosOfertaPorEstado
} from "@/dominio/servicios/juegos";
import {cookies} from "next/headers";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import OfertaCard from "@/components/page-components/admin/ofertas/OfertaCard";
import GrillaOfertas from "@/app/(modules)/admin/(components)/juegos/ofertas/GrillaOfertas";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";

async function OfertasInactivas() {
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosOfertaPorEstado("admin", cookie, false);
    if (!resultado.exito) return <>Error</>

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
                <h1 className="text-3xl font-bold tracking-tight">Ofertas de Juegos</h1>
                <div className={"flex gap-2"}>
                    <Link href="/admin/juegos/ofertas">
                        <Button>
                            <FaRegEye  className="mr-2 h-4 w-4"/>
                            Ver activas
                        </Button>
                    </Link>
                    <Link href="/admin/juegos/ofertas/agregar">
                        <Button>
                            <Plus className="mr-2 h-4 w-4"/>
                            Crear oferta
                        </Button>
                    </Link>
                </div>
            </div>
            <GrillaOfertas ofertas={resultado}/>
        </>
    )
}

export default OfertasInactivas;