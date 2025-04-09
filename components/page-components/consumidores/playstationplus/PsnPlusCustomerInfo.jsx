import {psnPlusInfo} from "@/static-data/info.psnplus";

function PsnPlusCustomerInfo () {
    return (
        <section className="w-full bg-white py-8 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-10">Información importante</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {psnPlusInfo.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-balance">
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                <feature.icon className="h-8 w-8 text-slate-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PsnPlusCustomerInfo;