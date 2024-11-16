"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import {addDoc, collection} from "firebase/firestore";
import {Convertidor} from "@/app/helpers/Converter";
import {db} from "@/app/firebase/config";
import {Firebase} from "@/app/helpers/Firebase";

const converter = new Convertidor();
const firebase = new Firebase();


export default function Home() {
    const [games, setGames] = useState([]);
    const [idParaBorrar, setIdParaBorrar] = useState(null);
    const [ofertas, setOfertas] = useState([]);

    const cargarOfertas = async () => {
        try {
            const datos = await firebase.obtenerOfertas();
            setOfertas(datos);
        } catch (error) {
            console.error("Error al obtener las ofertas:", error);
        }
    };

    useEffect(() => {
        cargarOfertas();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let a = new FormData(e.target);
        console.log(a.get("game"));
        const convertedResult = converter.convertir(a.get("game"));
        setGames(convertedResult);
        let oferta = {
            ends: "22/11/2024",
            games: [...convertedResult],
        };
        firebase.subirJuegos(oferta)
            .then((r) => {
                console.log(`Subido ID: ${r}`);
            })
            .catch((e) => console.error(e));
    };

    const filterProducts = (param) => {
        if (param == 1)
            return [...games].sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        if (param == 2)
            return [...games].sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
        if (param == 3)
            return [...games].sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        if (param == 4)
            return [...games].sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
    };

    const handleChange = (param) => {
        setGames(filterProducts(Number(param.target.value)));
    };

    return (
        <>
            <header className="flex w-full h-20 bg-cyan-900">
                <div className="w-10/12 mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Garret Games</h1>
                    <nav>
                        <ul>
                            <Link href={"/pages/ofertas"}>
                                <li>Ofertas</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="w-full min-h-screen flex flex-col">
                <div className={"d-flex gap-4"}>
                    <button className="px-4 py-2 bg-red-500 rounded-lg"
                            onClick={() => firebase.eliminarOfertas(idParaBorrar)}>
                        Reset
                    </button>
                </div>
                <div className={"bor1"}>
                    Elegido: {idParaBorrar}
                </div>
                <div>
                    {ofertas.map((e) => {
                        return (
                            <button className="px-4 py-2 bg-red-500 rounded-lg"
                                    key={e.id}
                                    onClick={() => setIdParaBorrar(e.id)}>
                                {e.id}
                            </button>
                        )
                    })}
                </div>
                <div>
                    <select
                        name="filter"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className="text-black p-2"
                    >
                        <option selected value={1}>
                            A-Z
                        </option>
                        <option value={2}>Z-A</option>
                        <option value={3}>Precio ascendente</option>
                        <option value={4}>Precio descendente</option>
                    </select>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        className="w-3/12 flex flex-col gap-2 p-4 border rounded"
                        onSubmit={handleSubmit}
                        method="post"
                    >
                        <label htmlFor="game">Inserte listado de juegos</label>
                        <textarea name="game" className="resize-y text-black p-2"/>
                        <button className="px-2 py-1 bg-cyan-800 rounded transition-all hover:bg-cyan-900">
                            Enviar
                        </button>
                    </form>
                </div>
                {games.length !== 0 ? (
                    <>
                        <div className="col-10 mx-auto">
                            <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="py-2 px-4 text-left">Juego</th>
                                    {/* <th className="py-2 px-4 text-left">Lista</th> */}
                                    <th className="py-2 px-4 text-left">Transferencia</th>
                                </tr>
                                </thead>
                                <tbody>
                                {games.map((game) => {
                                    let aumentado = game.price * 1.15;
                                    return (
                                        <tr
                                            className="border-b border-gray-200"
                                            key={`${game.price + game.name}`}
                                        >
                                            <td className="py-2 px-4 text-black">{game.name}</td>
                                            {/* <td className="py-2 px-4 text-black">
                        ${aumentado.toFixed(3)}
                      </td> */}
                                            <td className="py-2 px-4 text-black">${game.price}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <>No hay nada pa</>
                )}
            </main>
        </>
    );
}
