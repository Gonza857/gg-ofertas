import Image from "next/image";

function PsplusLogo() {
    return <div className={"mr-2 h-6 w-6"}>
        <Image
            src="/images/playstationplus/pluslogo.png"
            width={500}
            height={500}
            objectFit="contain"
            alt={"PlayStation Plus Logo"}/>
    </div>
}

export { PsplusLogo }