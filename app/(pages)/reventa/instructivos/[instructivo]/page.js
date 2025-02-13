import {
    Instructivo_Plus_PS4, Instructivo_Plus_PS5,
    Instructivo_Primaria_PS4, Instructivo_Primaria_PS5, Instructivo_Secundaria_PS4, Instructivo_Secundaria_PS5,
} from "@/components/page-components/consumidores/instructivos/Instructivos";

const diccionario = {
    "primaria-ps4": <Instructivo_Primaria_PS4/>,
    "secundaria-ps4": <Instructivo_Secundaria_PS4/>,
    "primaria-ps5": <Instructivo_Primaria_PS5/>,
    "secundaria-ps5": <Instructivo_Secundaria_PS5/>,
    "playstationplus-ps4": <Instructivo_Plus_PS4/>,
    "playstationplus-ps5": <Instructivo_Plus_PS5/>
}

function InstructivoEspecifico({params}) {
    if (!params.instructivo) {
        return (
            <h1>Nada</h1>
        )
    }

    return (
        <main className={"styledMain w-full px-2 pb-4"}>
            <article className={"w-full sm:w-10/12 md:w-7/12 lg:w-1/2 mx-auto"}>
                {diccionario[params.instructivo]}
            </article>
        </main>
    )
}

export default InstructivoEspecifico