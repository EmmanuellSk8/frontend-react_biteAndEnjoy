import { useEffect, useRef, useState } from "react"

export default function DeleteReservation() {
    const [clave, setClave] = useState("")
    const [cedula, setCedula] = useState("")
    const [error, setError] = useState(false)

    const deleteModal = useRef(null)
    const confirmDeleteModal = useRef(null)
    const overlay = useRef(null)

    const now = new Date()
    const date = now.toLocaleString("es", "ES")
    const name = "Emmanuel Guerra"
    const Mockcedula = 123
    const Mockclave = "as"

    const handleConfirmation = (e) => {
        e.preventDefault();

        if (cedula == Mockcedula && clave == String(Mockclave)) {
            if (deleteModal.current) {
                deleteModal.current.showModal();
            }

            if (overlay.current) {
                overlay.current.classList.add("active")
            }
        } else {
            setError(true)
            console.log("clave o cédula errónea");
        }
    }

    const closeModal = () => {
        if (deleteModal.current) {
            deleteModal.current.close();
        }

        if (overlay.current && !confirmDeleteModal.current?.open) {
            overlay.current.classList.remove("active")
        }
    };

    const handleDialogClose = () => {
        if (!deleteModal.current?.open && !confirmDeleteModal.current?.open) {
            if (overlay.current) {
                overlay.current.classList.remove("active");
            }
        }
    };

    useEffect(() => {
        const modalCurrent = deleteModal.current
        const confirmModalCurrent = confirmDeleteModal.current

        if (modalCurrent && confirmModalCurrent) {
            modalCurrent.addEventListener("close", handleDialogClose);
            confirmModalCurrent.addEventListener("close", handleDialogClose);

            return () => {
                modalCurrent.removeEventListener("close", handleDialogClose);
                confirmModalCurrent.removeEventListener("close", handleDialogClose);
            };
        }
    }, []);

    const openConfirmModal = () => {
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.showModal();
            deleteModal.current.close();
        }

        if (overlay.current) {
            overlay.current.classList.add("active")
        }
    };

    const closeConfirmModal = () => {
        if (confirmDeleteModal.current) {
            confirmDeleteModal.current.close();
        }

        if (overlay.current) {
            overlay.current.classList.remove("active")
        }
    };

    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around mx-2">
                <h2 className="titles text-4xl font-semibold text-center">Eliminar reserva</h2>

                <div className="flex gap-2 flex-col">
                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
                        <input
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            maxLength={15}
                            type="text" className="cursor-pointer border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />
                        <input
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            maxLength={30}
                            type="text" className="w-full cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />
                    </form>
                    {error &&
                        <p className="text-red-500 font-semibold text-md text-center">La cédula o la clave es erronea</p>
                    }
                    <div className="container-btns-reservation flex justify-center px-6 mt-4 flex-wrap gap-2">
                        <a
                            onClick={handleConfirmation}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                            Eliminar reserva</a>
                    </div>
                </div>
            </section>

            <dialog
                closedby="any"
                className="overflow-x-hidden px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg justify-center"
                ref={deleteModal}
                id="ModalDelete">

                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FDF6E7,transparent)]"></div></div>
                <div className="text-center gap-2 flex-col flex mb-16">
                    <div className="flex w-full justify-center">
                        <div className="rounded-full bg-orange-200 size-fit p-4">
                            <img src="/iconCalendar.png" className="size-14" />
                        </div>
                    </div>
                    <p className="text-3xl font-semibold mb-2">Reserva encontrada</p>
                    <p className="text-xl">Estimado/a {name}, hemos encontrado una reserva para el día y hora: <strong>{date}</strong></p>
                    <p className="text-xl">¿Desea eliminarla?</p>
                </div>

                <div className="container-btns-delete flex justify-center w-full mt-5 px-20 flex-nowrap gap-4">
                    <button
                        onClick={openConfirmModal}
                        className="w-[140px] border-2 border-black bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-gray-400 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                    >Eliminar</button>

                    <form method="dialog">
                        <button
                            className="w-[140px] border-2 border-black bg-amber-500 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-amber-600 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                            onClick={closeModal}
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <dialog
                closedby="any"
                ref={confirmDeleteModal}
                className="overflow-x-hidden px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                id="confirmDelete">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FDF6E7,transparent)]"></div></div>
                <div className="text-center gap-2 flex-col flex mb-16">
                    <div className="flex w-full justify-center">
                        <div className="rounded-full bg-orange-200 size-fit p-4">
                            <img src="/iconCalendar.png" className="size-14" />
                        </div>
                    </div>
                    <p className="text-3xl font-semibold mb-2">Reserva encontrada</p>
                    <p className="text-2xl">Estimado/a {name}, ¿Está seguro que <span className="text-red-600 font-semibold">desea eliminar la reserva</span> para el día y hora: <strong>{date}</strong>?</p>
                    <p className="text-2xl">¿Desea eliminarla?</p>
                </div>

                <div className="container-btns-delete flex justify-center w-full mt-5 px-20 flex-nowrap gap-4">
                    <button
                        className="w-[140px] border-2 border-black bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-red-700/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                    >Sí, eliminar</button>

                    <form method="dialog">
                        <button
                            onClick={closeConfirmModal}
                            className="w-[140px] border-2 border-black bg-amber-500 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-amber-600 duration-200 ease-in-out hover:scale-105 font-semibold text-xl text-nowrap"
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <div id="overlay" ref={overlay}></div>
        </>
    )
}