"use client"

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Alert, AlertDescription} from "@/components/ui/alert"
import {AlertTriangle} from "lucide-react";

function Error({error, reset}) {
    return (
        <main className="styledMain flex flex-col items-center justify-center px-2">
            <Card className={"border border-red-300"}>
                <CardHeader className="pb-4">
                    <div className={"flex justify-between"}>
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6 text-red-500"/>
                            <CardTitle>Ups! Algo salió mal</CardTitle>
                        </div>
                        <Button asChild className={"hidden md:block"}>
                            <Link href={"/reventa"}>
                                Volver al inicio
                            </Link>
                        </Button>
                    </div>
                    <CardDescription>
                        {error.message}
                    </CardDescription>
                </CardHeader>
                <CardContent className={"flex flex-col md:flex-row"}>
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4"/>
                        <AlertDescription>
                            Se ha producido un error en el servidor al procesar tu solicitud. Nuestro equipo técnico ha
                            sido
                            notificado.
                        </AlertDescription>
                    </Alert>
                    <Button asChild className={"md:hidden mt-4"}>
                        <Link href={"/reventa"}>
                            Volver al inicio
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}

export default Error