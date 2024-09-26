"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getOfertas = async () => {
  const ofertas = await fetch("http://localhost:3000/api/ofertas", {
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
    setSearch(e.target.value);
    setResultados(buscar(e.target.value));
  };

  return (
    <>
      <main className="w-full min-h-screen">
        <div className="w-10/12 mx-auto flex flex-col gap-2">
          <div className="w-8/12 mx-auto flex flex-col gap-2">
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

          <div className="w-8/12 mx-auto">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              className="text-black p-3 w-full"
              placeholder="Ingresa un juego para la busqueda"
            />
          </div>
          <p className="w-8/12 mx-auto">Buscando: {search}</p>
          <table className="w-8/12 mx-auto bg-white border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white text-center">
                <th className="py-2 px-4">Juego</th>
                <th className="py-2 px-4">Lista</th>
                <th className="py-2 px-4">Transferencia</th>
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
                        <td className="py-2 px-4 text-black">{game.name}</td>
                        <td className="py-2 px-4 text-black text-center">
                          ${aumentado.toFixed(0)}
                        </td>
                        <td className="py-2 px-4 text-black text-center">
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
                        <td className="py-2 px-4 text-black">{game.name}</td>
                        <td className="py-2 px-4 text-black text-center">
                          ${aumentado.toFixed(0)}
                        </td>
                        <td className="py-2 px-4 text-black text-center">
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
      </main>
    </>
  );
};

export default Ofertas;
