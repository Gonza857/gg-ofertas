import NavbarConsumidores from "@/components/page-components/consumidores/NavbarConsumidores";
import Footer from "@/components/page-components/principales/Footer";
import WhatsappBtn from "@/components/personalized-ui/WhatsappBtn";

function LayoutClientesFinales ({children}) {
    return (
        <>
            <NavbarConsumidores />
            {children}
            <Footer />
        </>
    )
}

export default LayoutClientesFinales