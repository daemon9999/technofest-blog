import { Link } from "react-router-dom";

export default function NotAvailable() {
    return (
        <main className="flex items-center flex-col gap-y-6 xs:gap-y-10 justify-center  w-full h-full text-center">
            <p className="uppercase gradient-text font-montserrat text-4xl xs:text-5xl font-bold tracking-wider">This page is not available!</p>
            <Link to={'/'} replace={true} className="w-[200px] bg-gradient-to-r from-20 to-10 py-3 px-4 flex items-center justify-center text-xl font-medium text-white  rounded-lg via-30">Back home</Link>
        </main>
    )
}