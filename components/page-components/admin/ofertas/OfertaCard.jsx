"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Calendar, Edit, Trash2} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

function OfertaCard({oferta}) {
    return (
        <Card key={oferta.id} className="overflow-hidden">
            <CardContent className="p-0">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-lg font-semibold">{oferta.titulo}</h3>
                            <p className="text-sm text-muted-foreground">{oferta.descripcion ?? "Sin descripción"}</p>
                        </div>
                        <Badge variant={oferta.estaActiva ? "default" : "secondary"}>
                            {oferta.estaActiva ? "Activa" : "Inactiva"}
                        </Badge>
                    </div>

                    <div className="space-y-3">

                        <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>
                                Finaliza: <strong>{oferta.termina}</strong>
                            </span>
                        </div>

                        <div className="flex items-center text-sm">
                            <div className="h-4 w-4 mr-2 flex items-center justify-center">
                                <span className="text-xs font-bold text-muted-foreground">#</span>
                            </div>
                            <span>
                        <strong>{oferta.juegos.length}</strong> juegos incluidos
                      </span>
                        </div>
                    </div>
                </div>

                <div className="border-t p-4 bg-muted/30 flex justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <span>Creada: {"fecha"}</span>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/admin/juegos/ofertas/${oferta.id}`}>
                            <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4 mr-1"/>
                                Editar
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500"
                            onClick={() => {
                            }}
                        >
                            <Trash2 className="h-4 w-4 mr-1"/>
                            Eliminar
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OfertaCard;