import TablaPlusLiquidacion from "@/components/page-components/reventa/TablaPlusLiquidacion";
import {obtenerPlusStock} from "@/dominio/servicios/playstationplus";

async function WrapperPlusLiquidacion() {
    const {exito, data} = await obtenerPlusStock()
    if (!exito) return <>Error</>

    return (
        <TablaPlusLiquidacion subscripciones={data}/>
    )
}

export default WrapperPlusLiquidacion;