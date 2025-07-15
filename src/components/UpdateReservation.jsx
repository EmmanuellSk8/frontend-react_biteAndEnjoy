import { useRef, useState } from "react";
import Calendar from "./Calendar"
import "../index.css"

export default function UpdateReservation() {
    const [peopleCount, setPeopleCount] = useState("")

    const UpdateReservation = useRef(null)

    const openModal = () => {
        if (UpdateReservation.current) {
            UpdateReservation.current.showModal();
        }
    }

    const closeModal = () => {
        if (UpdateReservation.current) {
            UpdateReservation.current.closeModal();
        }
    }

    const HandleNumberDiners = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 2 && value <= 12) {
            setPeopleCount(value);
        }
    }
    return (
        <>
            <section className=" flex flex-col gap-10 mt-40 justify-around px-2">
                <h2 className="titles text-4xl font-semibold text-center">Actualizar reserva</h2>

                <div className="flex gap-2 flex-col">

                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                        <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />

                        <input type="tel" className="w-full cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />

                    </form>

                    <div className="container-btns-reservation flex justify-center px-6 mt-4 flex-wrap gap-2">
                        <a
                            onClick={openModal}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl hover:bg-amber-500 cursor-pointer hover:scale-105 ease-in-out duration-300   font-bold ">
                            Actualizar reserva</a>  
                    </div>
                </div>
            </section>

            <dialog
                className="modalUpdateReservation max-w-[586px] px-8 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#FDFCED] p-4 shadow-2xl"
                ref={UpdateReservation}
            >
                <h2 className="text-3xl mb-10 text-center font-medium">Actualizar reserva</h2>

                <form action="" method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                    <label className="flex flex-col w-full">
                        <span className="text-lg font-semibold">Nombre</span>
                        <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg w-full" disabled />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="text-lg font-semibold">Teléfono</span>
                        <input type="tel" className="cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-1.5 rounded-lg" disabled />
                    </label>

                    <label className="labelResponsive">
                        <span className="text-lg font-semibold">Cédula</span>
                        <input type="number" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg" disabled />
                    </label>

                    <label className="labelResponsive">
                        <span className="text-lg font-semibold">Número de personas</span>
                        <input
                            type="number"
                            value={peopleCount}
                            onChange={HandleNumberDiners}
                            className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg"
                            required
                        />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="text-lg font-semibold">Email</span>
                        <input type="email" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-1.5 rounded-lg" disabled />
                    </label>

                    <label className="w-full">
                        <span className="text-lg font-semibold"> Fecha a reservar</span>
                        <Calendar className="mt-1 flex items-center w-full gap-1" />
                    </label>

                </form>

                <div className="container-btns-delete flex justify-between mt-5 px-20 flex-nowrap gap-4">
                    <button
                        className="w-[140px] bg-amber-500 px-4 py-1.5 cursor-pointerbg-green-600 hover:bg-ambar-600 rounded-lg duration-200 ease-in-out hover:scale-105 font-semibold text-xl border-2 border-black"
                    >Actualizar</button>

                    <form method="dialog">
                        <button
                            onClick={closeModal}
                            className="w-[140px] bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-gray-400 duration-200 ease-in-out hover:scale-105 font-semibold text-xl border-2 border-black"
                        >Cancelar</button>
                    </form>
                </div>
            </dialog>
        </>
        
    )
}