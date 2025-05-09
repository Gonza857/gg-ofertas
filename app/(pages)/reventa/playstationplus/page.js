import {Badge} from "@/components/ui/badge";
import {reventaPsnPlus} from "@/static-data/item.playstationplus";
import PlayStationPlusReventa from "@/components/personalized-ui/reventa/item.psnplus";
import PsnPlusCustomerInfo from "@/components/page-components/consumidores/playstationplus/PsnPlusCustomerInfo";
import React from "react";

function SubscripcionPlus() {
    return (
        <main className={"styledMain pt-20"}>
            <article className={"w-full p-1 md:p-0 md:w-10/12 lg:w-8/12 mx-auto"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">Subscripciones PlayStation Plus
                    PS4 & PS5</h1>
                <PsnPlusCustomerInfo/>
                <div className={"py-8 border-b border-slate-200"}>
                    <h2 className="text-2xl font-bold mb-6">Membresías PlayStation Plus</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {reventaPsnPlus.map((sub, index) => (
                            <PlayStationPlusReventa product={sub} key={index}/>
                        ))}
                    </div>
                    <div className="pt-8 text-center">
                        <Badge variant="outline" className="text-sm px-4 py-2">
                            PlayStation Plus - Precios actualizados. Abril 2025.
                        </Badge>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default SubscripcionPlus