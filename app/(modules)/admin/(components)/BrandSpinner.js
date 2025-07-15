import Image from "next/image";

function BrandSpinner() {
    return (
        <div className="pt-20 w-4/12 flex items-center justify-center mx-auto">
            <Image
                src={"/images/logo-nuevo.png"}
                alt="Vercel Logo"
                width={100}
                height={100}
                className="rounded-full animate-spin mx-auto"
            />
        </div>
    )
}

export default BrandSpinner