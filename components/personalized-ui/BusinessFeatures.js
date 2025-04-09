import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function BusinessFeatures () {
    const features = [
        {
            path: "/images/home-features/ps4.png",
            cta: "Ver juegos",
            href: "/juegos/stock/ps4",
        },
        {
            path: "/images/home-features/ps5.png",
            cta: "Ver juegos",
            href: "/juegos/stock/ps5",
        },
    ]

    return (
        <div className="w-full md:w-11/12 mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative h-48 lg:h-64 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                        style={{
                            backgroundImage: `url(${feature.path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Subtle gradient at bottom for button visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                        <div className="absolute inset-0 flex items-end justify-center p-4">
                            <Button
                                variant={"outline"}
                                className="text-slate-900 hover:bg-slate-100 transition-all duration-300 group-hover:translate-y-[-4px] flex items-center justify-center gap-2"
                                asChild
                            >
                                <a href={feature.href}>
                                    {feature.cta}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessFeatures;