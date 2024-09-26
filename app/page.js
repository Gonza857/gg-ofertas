"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getOfertas = async () => {
  let baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : "http://localhost:3000";
  const ofertas = await fetch(`${baseUrl}/api/ofertas`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  }).then((r) => r.json());
  return ofertas[0];
};

const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState([]);
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getOfertas().then((r) => {
      setOfertas(r.games);
      setEndDate(r.ends);
    });
  }, []);

  const buscar = (juego) => {
    return [...ofertas].filter((j) =>
      j.name.toLowerCase().includes(juego.toLowerCase())
    );
  };

  const handleChange = (e) => {
    if (e.target.value == "") {
      setSearch("");
      setResultados([]);
    } else {
      let results = buscar(e.target.value);
      setSearch(e.target.value);
      if (results.length == 0) {
        setResultados([]);
        setMessage(
          "No se encontraron resultados. Estas visualizado el listado completo."
        );
      } else {
        setResultados(buscar(e.target.value));
        setMessage(`Se encontraron ${results.length} resultados.`);
      }
    }
  };

  return (
    <>
      <main className="w-full min-h-screen py-4 pb-12">
        <div className="w-full md:w-10/12 mx-auto flex flex-col gap-2">
          <div className="w-11/12 md:w-8/12 mx-auto flex flex-col gap-1 md:gap-2">
            <h1 className="text-2xl font-semibold">
              Ofertas hasta disponibles el {endDate}
            </h1>
            <p className="list-item ms-4">Precios en cuenta primaria.</p>
            <p className="list-item ms-4">
              Consultar disponibilidad de cuenta secundaria.
            </p>
            <p className="list-item ms-4">
              Hasta 3 cuotas sin interés con débito/crédito (precio lista).
            </p>
          </div>
          <div className="w-11/12 md:w-8/12 mx-auto">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              className="text-black p-3 w-full"
              placeholder="Ingresa un juego para la busqueda"
            />
          </div>
          <p className="w-11/12 md:w-8/12 mx-auto">{message}</p>
          <div className="min-h-fit">
            <table className="w-full md:w-8/12 mx-auto bg-white border rounded-lg">
              <thead>
                <tr className="bg-gray-800 text-white text-center">
                  <th className="py-2 px-2 md:py-2 md:px-4">Juego</th>
                  <th className="py-2 px-2 md:py-2 md:px-4">Lista</th>
                  <th className="py-2 px-2 md:py-2 md:px-4">Transferencia</th>
                </tr>
              </thead>
              <tbody>
                {resultados.length > 0 ? (
                  <>
                    {resultados.map((game) => {
                      let aumentado = game.price * 1.15;
                      return (
                        <tr
                          className="border-b border-gray-200"
                          key={`${game.price + game.name}`}
                        >
                          <td className="text-sm py-1 px-2 md:py-2 md:px-4 text-black">
                            {game.name}
                          </td>
                          <td className="text-sm py-1 px-2 md:py-2 md:px-4 text-black text-center">
                            ${aumentado.toFixed(0)}
                          </td>
                          <td className="text-sm py-1 px-2 md:py-2 md:px-4 text-black text-center">
                            ${game.price}
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {ofertas.map((game) => {
                      let aumentado = game.price * 1.15;
                      return (
                        <tr
                          className="border-b border-gray-200"
                          key={`${game.price + game.name}`}
                        >
                          <td className="text-sm py-2 px-2 md:py-2 md:px-4 text-black">
                            {game.name}
                          </td>
                          <td className="text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center">
                            ${aumentado.toFixed(0)}
                          </td>
                          <td className="text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center">
                            ${game.price}
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Ofertas;
