import React from "react";
import {tarjetasPsn, tarjetasSteam} from "@/static-data/item.giftcards";
import GiftCard from "@/components/personalized-ui/item.giftcard";

async function TartejasDeRegalo() {
    return (
        <>
            <main className="styledMain py-4">
                <h2 className={"text-2xl font-bold mb-2 text-center"}>Tarjetas de regalo</h2>
                <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-4"}>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 md:px-0">
                        {[...tarjetasPsn, ...tarjetasSteam].map((giftCard, index) => (
                            <GiftCard key={index} giftCard={giftCard}/>
                        ))}
                    </div>
                </article>
            </main>
        </>
    )
}


export default TartejasDeRegalo;