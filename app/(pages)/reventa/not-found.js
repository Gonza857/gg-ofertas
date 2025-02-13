import Link from "next/link";
import {Button} from "@/components/ui/button";

function NotFound () {
    return (
        <main className="styledMain">
            <h1>Ups, no se encontró esa página</h1>
            <Link href="/reventa">
                <Button>
                    Volver al inicio
                </Button>
            </Link>

        </main>
    )
}

export default NotFound