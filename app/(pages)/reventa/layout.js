import NavbarReventa from "@/components/page-components/reventa/NavbarReventa";
import TelegramBtn from "@/components/personalized-ui/TelegramBtn";
import Footer from "@/components/page-components/principales/Footer";

function ReventaLayout ({children}) {
    return (
        <>
            <NavbarReventa/>
            {children}
            <TelegramBtn/>
            <Footer />
        </>
    )
}

export default ReventaLayout;