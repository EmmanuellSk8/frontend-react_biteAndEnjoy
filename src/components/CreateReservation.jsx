import { useState } from "react";
import Calendar from "./Calendar"
import "../index.css"

export default function CreateReservation() {
    const [peopleCount, setPeopleCount] = useState("")

        const HandleNumberDiners = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 2 && value <= 12) {
            setPeopleCount(value);
        }
    }
    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around shadow-2xl px-4 py-6 rounded-xl bg-amber-50/40">
                <h2 className="titles text-4xl font-semibold text-center">Reservar</h2>

                <div className="containerCreateReservation flex gap-2 flex-col mx-4 max-w-[510px]">

                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold">Nombre</span>
                            <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg w-full" />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold">Teléfono</span>
                            <input type="tel" className="cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-1.5 rounded-lg" />
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold">Cédula</span>
                            <input type="number" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg" />
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold">Número de personas</span>
                            <input
                                type="number"
                                value={peopleCount}
                                onChange={HandleNumberDiners}
                                className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg"
                            />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold">Email</span>
                            <input type="email" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg" required />
                        </label>

                        <label className="w-full">
                            <span className="text-lg font-semibold"> Fecha a reservar</span>
                            <Calendar className="mt-1 flex items-center w-full gap-1" />
                        </label>

                    </form>

                    <div className="container-btns-reservation flex justify-center px-6 mt-4 flex-nowrap gap-2">
                        <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                            Reservar</a>
                        
                    </div>
                </div>

            </section>

        </>
    );

}