"use client"

import AdminNavbar from "@/components/personalized-ui/AdminNavbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Bell, ChevronDown, ChevronRight, LogOut, Menu, X} from "lucide-react";
import {adminMenuItems} from "@/static-data/navbar.admin";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import AdminHeader from "@/components/page-components/admin/navbar/Header";
import {dmSans} from "@/app/layout";

function AdminLayout({children}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openMenus, setOpenMenus] = useState({
        productos: false,
        ventas: false,
        clientes: false,
        marketing: false,
        configuracion: false,
    })
    const pathname = usePathname()

    // Cerrar el menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    // Manejar el clic en un menú desplegable
    const toggleSubmenu = (menu) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }))
    }

    // Verificar si una ruta está activa
    const isActive = (path) => {
        return pathname === path
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header móvil */}
            <AdminHeader action={() => setIsMobileMenuOpen(true)}/>

            {/* Menú lateral para móvil (overlay) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
                    <div
                        className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h1 className={`text-black ${dmSans.className} font-bold text-xl`}>GARRET GAMES</h1>
                            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="h-5 w-5"/>
                                <span className="sr-only">Cerrar menú</span>
                            </Button>
                        </div>
                        <nav className="p-2">
                            {adminMenuItems.map((item, index) => (
                                <div key={index} className="mb-1">
                                    {!item.submenu ? (
                                        <Link href={item.path}>
                                            <Button
                                                variant="ghost"
                                                className={cn("w-full justify-start", isActive(item.path) && "bg-gray-100 text-primary")}
                                            >
                                                {item.icon}
                                                <span className="ml-2">{item.title}</span>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <>
                                            <Button variant="ghost" className="w-full justify-start"
                                                    onClick={() => toggleSubmenu(item.key)}>
                                                {item.icon}
                                                <span className="ml-2">{item.title}</span>
                                                {openMenus[item.key] ? (
                                                    <ChevronDown className="h-4 w-4 ml-auto"/>
                                                ) : (
                                                    <ChevronRight className="h-4 w-4 ml-auto"/>
                                                )}
                                            </Button>
                                            {openMenus[item.key] && (
                                                <div className="ml-6 mt-1 space-y-1">
                                                    {item.items.map((subItem, subIndex) => (
                                                        <Link key={subIndex} href={subItem.path}>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className={cn(
                                                                    "w-full justify-start",
                                                                    isActive(subItem.path) && "bg-gray-100 text-primary",
                                                                )}
                                                            >
                                                                {subItem.icon}
                                                                <span className="ml-2">{subItem.title}</span>
                                                            </Button>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                            <div className="mt-6 pt-6 border-t">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                    <LogOut className="h-5 w-5"/>
                                    <span className="ml-2">Cerrar sesión</span>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}

            {/* Layout principal */}
            <div className="flex h-screen overflow-hidden">
                {/* Menú lateral para escritorio (fijo) */}
                <aside className="hidden lg:block w-64 border-r bg-white overflow-y-auto">
                    <div className="p-4 border-b">
                        <h1 className={`text-black ${dmSans.className} font-bold text-xl`}>GARRET GAMES</h1>
                    </div>
                    <nav className="p-2">
                        {adminMenuItems.map((item, index) => (
                            <div key={index} className="mb-1">
                                {!item.submenu ? (
                                    <Link href={item.path}>
                                        <Button
                                            variant="ghost"
                                            className={cn("w-full justify-start", isActive(item.path) && "bg-gray-100 text-primary")}
                                        >
                                            {item.icon}
                                            <span className="ml-2">{item.title}</span>
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Button variant="ghost" className="w-full justify-start"
                                                onClick={() => toggleSubmenu(item.key)}>
                                            {item.icon}
                                            <span className="ml-2">{item.title}</span>
                                            {openMenus[item.key] ? (
                                                <ChevronDown className="h-4 w-4 ml-auto"/>
                                            ) : (
                                                <ChevronRight className="h-4 w-4 ml-auto"/>
                                            )}
                                        </Button>
                                        {openMenus[item.key] && (
                                            <div className="ml-6 mt-1 space-y-1">
                                                {item.items.map((subItem, subIndex) => (
                                                    <Link key={subIndex} href={subItem.path}>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className={cn(
                                                                "w-full justify-start",
                                                                isActive(subItem.path) && "bg-gray-100 text-primary",
                                                            )}
                                                        >
                                                            {subItem.icon}
                                                            <span className="ml-2">{subItem.title}</span>
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="mt-6 pt-6 border-t">
                            <Button variant="ghost"
                                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                                <LogOut className="h-5 w-5"/>
                                <span className="ml-2">Cerrar sesión</span>
                            </Button>
                        </div>
                    </nav>
                </aside>

                {/* Contenido principal */}
                <main className="w-full flex flex-col overflow-y-auto bg-gray-50 styledAdminMain">
                    {/* Header de escritorio */}
                    <header className="hidden lg:flex items-center justify-between p-4 bg-white border-b">
                        <h1 className="text-xl font-bold">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5"/>
                                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                            </Button>
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
                        </div>
                    </header>

                    {/* Contenido de la página */}
                    <div className="p-1 sm:p-2 md:p-6">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;