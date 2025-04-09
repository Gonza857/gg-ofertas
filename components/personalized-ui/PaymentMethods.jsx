import {CreditCard, Banknote, Wallet, Gift} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"
import {SiAmericanexpress, SiMastercard, SiMercadopago, SiVisa} from "react-icons/si";
import Image from "next/image";


function PaymentMethods() {
    const paymentMethods = [
        {
            name: "Tarjeta de crédito",
            icon: <CreditCard className="h-8 w-8"/>,
            description: "Hasta 3 cuotas sín interés.",
        },
        {
            name: "Transferencia bancaria",
            icon: <Banknote className="h-8 w-8"/>,
            description: "20% de descuento.",
        },
        {
            name: "MercadoPago",
            icon: <Image
                src={"/images/payment-methods/mercado-pago.svg"}
                alt={"Mercado Pago"}
                width={50}
                height={50}/>,
            description: "Código QR, link de pago.",
        },
        {
            name: "Go Cuotas",
            icon: <Image
                src={"/images/payment-methods/go-cuotas.png"}
                alt={"Go cuotas"}
                className={"rounded-full"}
                width={50}
                height={50}/>,
            description: "Hasta 3 cuotas sin interés con tarjeta de débito.",
        },
    ]

    return (
        <section className="w-11/12 mx-auto py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Métodos de Pago</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Ofrecemos múltiples opciones de pago seguras para tu comodidad
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl">
                        {paymentMethods.map((method, index) => (
                            <Card key={index} className="transition-all hover:shadow-md">
                                <CardContent
                                    className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                                    <div className="rounded-full bg-primary/10 p-3 text-primary">{method.icon}</div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">{method.name}</h3>
                                        <p className="text-sm text-muted-foreground">{method.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                        <div className="flex items-center justify-center h-12 w-20 bg-white rounded-md shadow p-2">
                            <div className="text-xl font-bold text-gray-800">
                                <SiVisa className={"w-12 h-12"}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-12 w-20 bg-white rounded-md shadow p-2">
                            <div className="text-xl font-bold text-gray-800">
                                <SiMastercard className={"w-12 h-12"}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-12 w-20 bg-white rounded-md shadow p-2">
                            <div className="text-xl font-bold text-gray-800">
                                <SiAmericanexpress className={"w-12 h-12"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethods;