import { Button } from "@/components/ui/button"
import { BanknoteIcon, ChevronRight } from "lucide-react"
import { RiDiscountPercentLine } from "react-icons/ri"
import Link from "next/link";

function PlusOfertaBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {/* Información de cuotas */}
                        <div className="flex items-center gap-3">
                            <RiDiscountPercentLine className="h-8 w-8 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">¡Oferta en PlayStation Plus 12 meses!</h3>
                                <p className="text-sm text-white/80">Essential, Extra y Deluxe</p>
                            </div>
                        </div>

                        {/* Información de descuento por transferencia */}
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

                    {/* Botón Ver más */}
                    <div className="flex-shrink-0">
                        <Link href={"/playstationplus"}>
                            <Button
                                variant="secondary"
                                className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-6 py-2 flex items-center gap-2"
                            >
                                Ver más
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusOfertaBanner
