import { Link } from "react-router-dom";
import { AtroposCard } from "../components/Hero";

export default function PageNotFound() {
    return (

        <div className="w-full min-h-screen justify-center items-center flex flex-col max-[330px]:mb-6 overflow-hidden">
            <div className="flex items-center flex-nowrap w-full justify-center">
                <p className="text-[288px] max-[550px]:text-[250px] max-[416px]:text-[200px] max-[360px]:text-[160px]">4</p>
                <div className="w-72">
                    <AtroposCard />
                </div>
                <p className="text-[288px] max-[550px]:text-[250px] max-[416px]:text-[200px] max-[360px]:text-[160px]">4</p>
            </div>
            <div className="flex flex-col w-full items-center gap-3">
                <p className="text-6xl font-bold text-orange-500/90">Error</p>
                <p className="text-4xl font-semibold text-center text-red-400">Página no encontrada</p>
                <Link to="/home">
                    <button
                        className="cursor-pointer p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
                    >
                        <div
                            className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2"
                        >
                            <div className="flex gap-2 items-center">
                                <span className="font-semibold">Volver al inicio</span>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}