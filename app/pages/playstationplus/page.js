import React from "react";

let i = 0;

const data = [
    {id: i++, title: "1 Mes Essential", bt_price: 8800, cc_price: 10500},
    {id: i++, title: "3 Meses Essential", bt_price: 16500, cc_price: 19500},
    {id: i++, title: "12 Meses Essential", bt_price: 38500, cc_price: 46000},
    {id: i++, title: "1 Mes Extra", bt_price: 11550, cc_price: 13900},
    {id: i++, title: "3 Mes Extra", bt_price: 27500, cc_price: 33000},
    {id: i++, title: "12 Mes Extra", bt_price: 55000, cc_price: 66000},
    {id: i++, title: "1 Mes Deluxe", bt_price: 14850, cc_price: 17900},
    {id: i++, title: "3 Mes Deluxe", bt_price: 33000, cc_price: 39600},
    {id: i++, title: "12 Mes Deluxe", bt_price: 71500, cc_price: 85000},
]

const PlayStationPlus = () => {
    return (
        <>
            <main className="w-full min-h-screen py-4 pb-12 flex flex-col gap-4">
                <div className="w-11/12 md:w-4/12 mx-auto flex flex-col gap-1 md:gap-2">
                    <h1 className="text-2xl font-semibold">
                        PlayStation Plus PS4 & PS5
                    </h1>
                    <p className="list-item ms-4">Se envia un usuario que se activa como principal y permite los
                        beneficios de dicha membresía</p>
                    <p className="list-item ms-4">
                        Hasta 3 cuotas sin interés con débito/crédito (precio lista).
                    </p>
                    <p className="list-item ms-4">
                        Garantía durante el tiempo adquirido
                    </p>
                    <p className="list-item ms-4">
                        Licencias originales.
                    </p>
                </div>
                <table className="w-full md:w-4/12 mx-auto bg-white border rounded-lg">
                    <thead>
                    <tr className="bg-gray-800 text-white text-center">
                        <th className="py-2 px-2 md:py-2 md:px-4">Juego</th>
                        <th className="py-2 px-2 md:py-2 md:px-4">Lista</th>
                        <th className="py-2 px-2 md:py-2 md:px-4">
                            Transferencia
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((data) => <PlusTr data={data} key={data.id}/>)}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default PlayStationPlus;


const PlusTr = ({data}) => {
    const {id, title, bt_price, cc_price} = data;

    let bg;
    if (title.toLowerCase().includes("essential")) bg = "bg-gray-200 text-black"
    if (title.toLowerCase().includes("extra")) bg = "bg-yellow-500 text-black"
    if (title.toLowerCase().includes("deluxe")) bg = "bg-black text-white"

    return (<>
        <tr
            className="border-b border-gray-200"
            key={id}
        >
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 ${bg}`}>
                {title}
            </td>
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center ${bg}`}>
                ${cc_price.toFixed(0)}
            </td>
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center ${bg}`}>
                ${bt_price}
            </td>
        </tr>
    </>)
}

