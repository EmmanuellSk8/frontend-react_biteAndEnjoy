import { useEffect, useRef } from "react"

export default function DeleteReservation() {
    const id = "idDeprueba"

    const deleteModal = useRef(null)
    const confirmDeleteModal = useRef(null)
    const overlay = useRef(null)

    const openModal = () => {
        if (deleteModal.current) {
            deleteModal.current.showModal();
        }
        
        if (overlay.current) {
            overlay.current.classList.add("active")
        }
    };

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
            <section className="flex flex-col gap-10 mt-40 justify-around">
                <h2 className="titles text-4xl font-semibold text-center">Eliminar reserva</h2>

                <div className="flex gap-2 flex-col">
                    <form action="" method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
                        <input type="text" className="cursor-pointer border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />
                        <input type="tel" className="w-full cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />
                    </form>

                    <div id="BtnDeleteReservation" className="container-btns-reservation flex justify-between px-6 mt-4 flex-wrap gap-2">
                        <a
                            onClick={openModal}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl hover:bg-lime-500/90 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:text-white font-bold">
                            Consultar</a>

                        <a
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-600 hover:text-white font-bold">
                            Cancelar</a>
                    </div>
                </div>
            </section>

            <dialog
                closedby="any"
                className="px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg justify-center"
                ref={deleteModal}
                id="ModalDelete">
                <div className="text-center gap-2 flex-col flex mb-16">
                    <p className="text-2xl">Se encontró una reserva asociada al id: {id}</p>
                    <p className="text-2xl">¿Desea eliminarla?</p>
                </div>

                <div className="container-btns-delete flex justify-between mt-5 px-20 flex-wrap gap-4">
                    <button
                        onClick={openConfirmModal}
                        className="w-[140px] bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-red-500/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                    >Eliminar</button>

                    <form method="dialog">
                        <button
                            className="w-[140px] bg-amber-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-lime-500/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                            onClick={closeModal}
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <dialog
                closedby="any"
                ref={confirmDeleteModal}
                className="px-10 py-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                id="confirmDelete">
                <div className="text-center gap-2 flex-col flex mb-16">
                    <p className="text-2xl">¿Está seguro que <span className="text-red-600 font-semibold">desea eliminar la reserva</span> asociada al id: {id}?</p>
                    <p className="text-2xl">¿Desea eliminarla?</p>
                </div>

                <div className="container-btns-delete flex justify-between mt-5 px-20 flex-wrap gap-4">
                    <button
                        className="w-[140px] bg-gray-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-red-500/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                    >Sí, eliminar</button>

                    <form method="dialog">
                        <button
                            onClick={closeConfirmModal}
                            className="w-[140px] bg-amber-300 px-4 py-1.5 cursor-pointer rounded-lg hover:bg-lime-500/80 duration-200 ease-in-out hover:scale-105 font-semibold text-xl"
                        >No, cerrar</button>
                    </form>
                </div>
            </dialog>

            <div id="overlay" ref={overlay}></div>
        </>
    )
}