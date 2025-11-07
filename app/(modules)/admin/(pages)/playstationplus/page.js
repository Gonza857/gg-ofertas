import {reventaPsnPlus} from "@/static-data/item.playstationplus";
import React from "react";
import PlayStationPlusAdmin from "@/app/(modules)/admin/helpers/PlayStationPlusAdmin";
import TablaPlayStationPlus from "@/app/(modules)/admin/(components)/playstationplus/TablaPlayStationPlus";

function PlayStationPlus () {
    const items = PlayStationPlusAdmin.procesarMembresias(reventaPsnPlus)

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Listado PlayStation Plus</h1>
            <div className={"w-8/12 mx-auto"}>
                <TablaPlayStationPlus membresias={items} />
            </div>

        </div>

    )
}




export default PlayStationPlus;