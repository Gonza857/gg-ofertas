import {BanknoteIcon, CreditCard} from "lucide-react";
import {RiDiscountPercentLine} from "react-icons/ri";

function PlusOfertaBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-4 md:gap-8">
                        {/* Información de cuotas */}
                        <div className="flex items-center gap-3">
                            <RiDiscountPercentLine className="h-8 w-8 flex-shrink-0"/>
                            <div>
                                <h3 className="text-lg font-bold">
                                    ¡Oferta en PlayStation Plus 12 meses!
                                </h3>
                                <p className="text-sm text-white/80">Essential, Extra y Deluxe</p>
                            </div>
                        </div>

                        {/*/!* Información de descuento por transferencia *!/*/}
                        {/*<div className="flex items-center gap-3">*/}
                        {/*    <div className="relative flex-shrink-0">*/}
                        {/*        <BanknoteIcon className="h-8 w-8" />*/}
                        {/*        <div className="absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">*/}
                        {/*            %*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <h3 className="text-lg font-bold">¡20% DE DESCUENTO!</h3>*/}
                        {/*        <p className="text-sm text-white/80">Pagando por transferencia bancaria</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusOfertaBanner;