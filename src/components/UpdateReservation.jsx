import { useRef } from "react";

export default function UpdateReservation() {

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
    return (
        <>

            <section className="mb-96 flex flex-col gap-10 mt-40 justify-around">
                <h2 className="titles text-4xl font-semibold text-center">Actualizar reserva</h2>

                <div className="flex gap-2 flex-col">

                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                        <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />

                        <input type="tel" className="w-full cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />

                    </form>

                    <div className="container-btns-reservation flex justify-between px-6 mt-4 flex-wrap gap-2">
                        <a
                            onClick={openModal}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl hover:bg-lime-500/90 cursor-pointer hover:scale-105 ease-in-out duration-300  hover:text-white font-bold">
                            Consultar</a>

                        <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-600 hover:text-white font-bold">
                            Cancelar</a>
                    </div>
                </div>

            </section>

            <dialog
                className="px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                ref={UpdateReservation}
            >

                <h2 className="text-3xl mb-10 text-center font-medium">Actualizar reserva</h2>

                <form action="" method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                    <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Nombre de ejemplo" disabled />

                    <input type="tel" className="w-[300px] cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Email de ejemplo" disabled />

                    <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Cédula de ejemplo" disabled />

                    <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Teléfono de prueba" disabled />

                    <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Número de personas" required />

                    <input type="datetime-local" className="w-full cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl"/>


                </form>

                <div className="container-btns-delete flex justify-between mt-5 px-20 flex-wrap gap-4">
                    <button
                        className="w-[140px] bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-lime-500/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"

                    >Actualizar</button>

                    <form method="dialog">
                        <button
                            onClick={closeModal}
                            className="w-[140px] bg-amber-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-orange-400 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                        >Cancelar</button>
                    </form>
                </div>
            </dialog>

        </>
    )

}