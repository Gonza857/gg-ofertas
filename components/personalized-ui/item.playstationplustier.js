import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Check} from "lucide-react";

function PlayStationPlusTier  ({tier}) {
    return (
        <Card key={tier.name} className={`overflow-hidden border ${tier.borderClass}`}>
            <CardHeader className={`${tier.headerClass}`}>
                <CardTitle className="text-center text-xl">PlayStation Plus {tier.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default PlayStationPlusTier;