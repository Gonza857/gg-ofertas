import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

function AdminHeader ({action}) {
    return (
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
            <Button variant="ghost" size="icon" onClick={action}>
                <Menu className="h-6 w-6"/>
                <span className="sr-only">Abrir menú</span>
            </Button>
            <h1 className="text-xl font-bold">Game Store Admin</h1>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar"/>
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default AdminHeader;