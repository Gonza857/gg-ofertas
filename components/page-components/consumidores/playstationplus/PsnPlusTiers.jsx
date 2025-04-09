import {psplustiers} from "@/static-data/item.playstationplustiers";
import PlayStationPlusTier from "@/components/personalized-ui/item.playstationplustier";

function PsnPlusTiers () {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold mb-6">Comparativa de Planes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {psplustiers.map((tier, index) => (
                    <PlayStationPlusTier key={index} tier={tier} />
                ))}
            </div>
            {/*<p className="text-sm text-muted-foreground mt-4 text-center">*/}
            {/*    * Las características pueden variar según la región. Consulta playstation.com para más detalles.*/}
            {/*</p>*/}
        </div>
    )
}

export default PsnPlusTiers;