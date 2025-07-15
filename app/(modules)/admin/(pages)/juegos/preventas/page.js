import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {cookies} from "next/headers";
import {obtenerPreventas} from "@/dominio/servicios/preventas";
import TablaPreventas from "@/app/(modules)/admin/(components)/preventas/TablaPreventas";

async function Preventas () {
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerPreventas(cookie);
    if (!resultado.exito) return <>Error</>

    return (
        <div className="flex flex-col space-y-2 gap-4 mb-4">
            <div className={"flex gap-2 justify-between"}>
                <h1 className="text-3xl font-bold tracking-tight">Preventas</h1>
                <div className={"flex gap-2"}>
                    <Link href="/admin/juegos/preventas/agregar">
                        <Button>
                            <Plus className="mr-2 h-4 w-4"/>
                            Agregar preventa
                        </Button>
                    </Link>
                </div>
            </div>

            <TablaPreventas preventas={resultado.data}/>
        </div>
    )
}

export default Preventas