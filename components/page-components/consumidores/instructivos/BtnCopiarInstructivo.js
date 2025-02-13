"use client"
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Button} from "@/components/ui/button";

function BtnCopiarInstructivo ({data}) {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    return (
        <Button onClick={()=>copiar(data, 0)} className={"w-full mt-4"} variant="outline">
            Copiar instructivo
        </Button>
    )
}

export default BtnCopiarInstructivo