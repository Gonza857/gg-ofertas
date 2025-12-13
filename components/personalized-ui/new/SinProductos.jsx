import {Card, CardContent} from "@/components/ui/card";
import {PackageX} from "lucide-react";
import {Button} from "@/components/ui/button";

export function SinProductos({
                                 icon: Icon = PackageX,
                                 title = "No hay productos",
                                 description = "No se encontraron productos en este momento.",
                                 actionLabel,
                                 onAction,
                             }) {
    return (
        <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-muted mb-6">
                    <Icon className="size-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-balance">{title}</h3>
                <p className="text-muted-foreground max-w-md mb-6 text-pretty">{description}</p>
                {actionLabel && onAction && <Button onClick={onAction}>{actionLabel}</Button>}
            </CardContent>
        </Card>
    );
}