import { Button } from "@/components/ui/button"
import { BanknoteIcon, ChevronRight } from "lucide-react"
import { RiDiscountPercentLine } from "react-icons/ri"
import Link from "next/link";

function PlusOfertaBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-3 md:py-4 mb-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Versión móvil - Una línea compacta */}
                <div className="flex md:hidden items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <RiDiscountPercentLine className="h-6 w-6 flex-shrink-0" />
                        <div>
                            <h3 className="text-sm font-bold">¡Oferta PlayStation Plus 12 Meses!</h3>
                            <p className="text-xs text-white/80">Essential, Extra y Deluxe con 3 cuotas sin interés</p>
                        </div>
                    </div>
                    <Link href={"/playstationplus"}>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-4 py-1.5 text-sm flex-shrink-0"
                        >
                            Ver más
                        </Button>
                    </Link>
                </div>

                {/* Versión tablet - Dos elementos en línea */}
                <div className="hidden md:flex lg:hidden items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <RiDiscountPercentLine className="h-7 w-7 flex-shrink-0" />
                            <div>
                                <h3 className="text-base font-bold">¡Oferta PlayStation Plus 12 meses!</h3>
                                <p className="text-sm text-white/80">Essential, Extra y Deluxe</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <BanknoteIcon className="h-7 w-7 flex-shrink-0" />
                            <div>
                                <h3 className="text-base font-bold">3 cuotas sin interés</h3>
                            </div>
                        </div>
                    </div>

                    <Link href={"/playstationplus"}>
                        <Button
                            variant="secondary"
                            className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-6 py-2 flex items-center gap-2 flex-shrink-0"
                        >
                            Ver más
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </Link>

                </div>

                {/* Versión desktop - Todo en una línea */}
                <div className="hidden lg:flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <RiDiscountPercentLine className="h-8 w-8 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">¡Oferta en PlayStation Plus 12 meses!</h3>
                                <p className="text-sm text-white/80">Essential, Extra y Deluxe</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative flex-shrink-0">
                                <BanknoteIcon className="h-8 w-8" />
                                <div className="absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                    %
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">¡3 cuotas sin interés!</h3>
                                <p className="text-sm text-white/80">Con tarjetas crédito/débito</p>
                            </div>
                        </div>
                    </div>

                    <Link href={"/playstationplus"}>
                        <Button
                            variant="secondary"
                            className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-6 py-2 flex items-center gap-2 flex-shrink-0"
                        >
                            Ver más
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlusOfertaBanner
