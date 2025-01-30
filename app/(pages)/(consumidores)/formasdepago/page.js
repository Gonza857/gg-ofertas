import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {CreditCard, Banknote, Landmark, Bitcoin, Wallet, CreditCardIcon as DebitCard, Percent} from "lucide-react"
import {Badge} from "@/components/ui/badge";

const metodosDePago = [
  {
    name: "Transferencia Bancaria",
    icon: Landmark,
    description: "Transferencia bancaria inmediata, CVU/CBU.",
    color: "bg-blue-500",
    discount: {
      description: "15% OFF",
    },
  },
  {
    name: "Efectivo",
    icon: Banknote,
    description: "Pago en efectivo a través de Rapipago o Pago Fácil.",
    color: "bg-green-500",
    discount: {
      description: "10% OFF",
    },
  },
  {
    name: "Criptomonedas",
    icon: Bitcoin,
    description: "Pago con Bitcoin y otras criptomonedas.",
    color: "bg-orange-500",
    discount: {
      description: "15% OFF",
    },
  },
  {
    name: "Tarjeta de Débito",
    icon: DebitCard,
    description: "Pago inmediato con tu tarjeta de débito.",
    color: "bg-purple-500",
  },
  {
    name: "Tarjeta de Crédito",
    icon: CreditCard,
    description: "Pago con tarjeta de crédito en cuotas.",
    color: "bg-red-500",
  },
  {
    name: "Cuenta DNI",
    icon: Wallet,
    description: "Pago rápido con tu Cuenta DNI. De Lunes a Viernes.",
    color: "bg-indigo-500",
    logo: "/images/cuentadni.webp",
    discount: {
      description: "20% OFF. Tope $6.000 por mes y por persona.",
    },
  },
  {
    name: "Go Cuotas",
    icon: CreditCard,
    description: "Financia tu compra con Go Cuotas. Hasta 3 cuotas con tarjeta de débito.",
    color: "bg-yellow-500",
    logo: "/images/gocuotas2.png",
  },
  {
    name: "MercadoPago",
    icon: CreditCard,
    description: "Paga fácil y rápido con MercadoPago usando Código QR o Link de Pago.",
    color: "bg-sky-500",
    logo: "/images/mercadopago.png",
  },
]

function MetodosDePago ()  {
  return (
      <main className="styledMain py-8">
        <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto px-2"}>
          <h1 className="text-3xl font-bold text-center mb-8">Medios de Pago Aceptados</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metodosDePago.map((method, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {method.logo ? (
                          <Image
                              src={method.logo || "/placeholder.svg"}
                              alt={`${method.name} logo`}
                              width={40}
                              height={40}
                              className="rounded-full"
                          />
                      ) : (
                          <div className={`p-2 rounded-full ${method.color}`}>
                            <method.icon className="h-6 w-6 text-white"/>
                          </div>
                      )}
                      <div>
                        <CardTitle className="text-xl">{method.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{method.description}</CardDescription>
                    {method.discount && (
                        <div className="mt-4 flex items-center gap-2">
                          <Badge variant="outline" className="text-sm bg-green-500 py-1">
                            <Percent className="h-4 w-4 text-white"/>
                          </Badge>
                          <span className="text-sm font-medium text-green-600">{method.discount.description}</span>
                        </div>
                    )}
                  </CardContent>
                </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Badge variant="outline" className="text-sm">
              Todos los pagos son procesados de forma segura
            </Badge>
          </div>
        </article>
      </main>
  );
};

export default MetodosDePago;
