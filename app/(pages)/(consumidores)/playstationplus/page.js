import React from "react";
import {Badge} from "@/components/ui/badge";
import {playstationplus} from "@/static-data/item.playstationplus";
import PlayStationPlus from "@/components/personalized-ui/item.playstationplus";
import PsnPlusTiers from "@/components/page-components/consumidores/playstationplus/PsnPlusTiers";
import PaymentInfoBanner from "@/components/personalized-ui/PaymentInfoBanner";
import PsnPlusCustomerInfo from "@/components/page-components/consumidores/playstationplus/PsnPlusCustomerInfo";
import PlusOfertaBanner from "@/components/personalized-ui/shared/PlusOfertaBanner";

const PlayStationPlusSSS = () => {
    return (
        <main className="styledMain">
            <PaymentInfoBanner/>
            <PlusOfertaBanner/>
            <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-8 px-2 md:px-4"}>
                <h1 className="text-4xl font-bold text-center mb-8">Subscripciones PlayStation Plus</h1>
                <PsnPlusCustomerInfo/>

                <div className={"py-8 border-b border-slate-200"}>
                    <h2 className="text-2xl font-bold mb-6">Membresías PlayStation Plus</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                        {/*{subscriptions.map((sub, index) => (*/}
                        {/*    <SubscripcionCard sub={sub} key={index}/>*/}
                        {/*))}*/}
                        {playstationplus.map((sub, index) => (
                            <PlayStationPlus product={sub} key={index}/>
                        ))}
                    </div>
                    <div className="pt-8 text-center">
                        <Badge variant="outline" className="text-sm px-4 py-2">
                            PlayStation Plus - Precios actualizados. Mayo 2025.
                        </Badge>
                    </div>
                </div>
                <PsnPlusTiers/>
            </article>
        </main>
    )
}

export default PlayStationPlusSSS;
