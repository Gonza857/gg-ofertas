import { CircleCheck, Award, Clock } from "lucide-react"

function BusinessHighlights () {
    const highlights = [
        {
            icon: CircleCheck,
            title: "Productos originales",
            description:
                "Ofrecemos productos 100% originales y con licencias oficiales.",
        },
        {
            icon: Award,
            title: "Experiencia Comprobada",
            description: "Más de 5 años de experiencia y +5000 ventas en el sector nos avalan.",
        },
        {
            icon: Clock,
            title: "Atención Personalizada",
            description: "Brindamos atención personalizada a cada cliente, adaptándonos a sus necesidades específicas.",
        },
    ]

    return (
        <section className="w-11/12 mx-auto bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                <highlight.icon className="h-12 w-12 text-slate-700" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                            <p className="text-slate-600">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BusinessHighlights;