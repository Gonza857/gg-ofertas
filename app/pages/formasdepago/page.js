import React from "react";

const page = () => {
  return (
    <main className="flex justify-center min-h-screen w-full">
      <div className="w-fit mx-auto flex flex-col gap-1 pt-4">
        <p className="text-3xl font-semibold">Medios de pago</p>
        <p className="list-item ms-4">Transferencia</p>
        <p className="list-item ms-4">Efectivo rapipago/pagofacil</p>
        <p className="list-item ms-4">Cuenta DNI (20% OFF)</p>
        <p className="list-item ms-4">Tarjeta de crédito</p>
        <p className="list-item ms-4">Tarjeta de débito</p>
        <p className="list-item ms-4">Cryptomonedas</p>
      </div>
    </main>
  );
};

export default page;
