import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {ChevronDown, ChevronRight} from "lucide-react";
import {PREGUNTAS_Y_RESPUESTAS} from "@/static-data/data";

function PreguntasFrecuentes () {
    return (
        <main className={"styledMain pt-20 pb-4"}>
            <section className="w-full max-w-3xl mx-auto px-4 font-sans">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Preguntas Frecuentes</h2>
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {PREGUNTAS_Y_RESPUESTAS.map((topic, topicIndex) => (
                        <AccordionItem key={topicIndex} value={`topic-${topicIndex}`} className="border rounded-lg shadow-md">
                            <AccordionTrigger className="text-left text-xl font-semibold text-primary hover:no-underline hover:bg-primary/5 px-6 py-4 rounded-t-lg transition-colors">
                                <div className="flex items-center space-x-2">
                                    <ChevronRight className="w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                                    <span>{topic.topic}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-2 pb-4">
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                    {topic.items.map((faq, faqIndex) => (
                                        <AccordionItem
                                            key={faqIndex}
                                            value={`faq-${topicIndex}-${faqIndex}`}
                                            className="border-b border-gray-200 last:border-b-0"
                                        >
                                            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-3">
                                                <div className="flex items-center space-x-2">
                                                    <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                                    <span>{faq.question}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pl-7 pb-3">
                                                {Array.isArray(faq.answer) ? (
                                                    faq.answer.map((paragraph, pIndex) => (
                                                        <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
                                                            {paragraph}
                                                        </p>
                                                    ))
                                                ) : (
                                                    <p>{faq.answer}</p>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </main>
    )
}

export default PreguntasFrecuentes