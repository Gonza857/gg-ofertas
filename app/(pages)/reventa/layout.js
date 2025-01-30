import NavbarReventa from "@/components/page-components/reventa/NavbarReventa";
import TelegramBtn from "@/components/personalized-ui/TelegramBtn";

function ReventaLayout ({children}) {
    return (
        <>
            <NavbarReventa/>
            {children}
            <TelegramBtn/>
        </>
    )
}

export default ReventaLayout;