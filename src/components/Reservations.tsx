import { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar"
import "../index.css"
import { CircleQuestionMark, User2 } from "lucide-react";
import { CardReservationProps } from "../types/CardReservationProps";
import { HeaderReservation } from "./Headers";
import Footer from "./Footer";
import Swal from 'sweetalert2'

const CardReservation = ({ name, email, cedula, telefono, Npersonas, fecha }: CardReservationProps) => {
    return (
        <div className="bg-white border-1 border-gray-400 p-6 rounded-xl">

            <div className="mb-4 flex gap-2 text-2xl font-semibold items-center">
                <User2 size={26} />
                <p>{name}</p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between">
                    <p className="text-gray-600">Correo</p>
                    <p>{email}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between">
                    <p className="text-gray-600">Cédula</p>
                    <p>{cedula}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between">
                    <p className="text-gray-600">Teléfono</p>
                    <p>{telefono}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between">
                    <p className="text-gray-600">Número de personas</p>
                    <p>{Npersonas}</p>
                </div>
                <div className="border-1 border-gray-300 mt-2"></div>
                <div className="w-full flex justify-between">
                    <p className="text-gray-600">Fecha y hora</p>
                    <p>{fecha}</p>
                </div>

            </div>
        </div>
    )
}

function GetReservation() {
    const [showAlert, setShowAlert] = useState(false)
    const now = new Date()
    const date = now.toLocaleString("es")

    const handleAlert = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva(s) encontrada(s)!",
            text:  `Se han encontrado reserva(s)!`,
            icon: "success"
        });
    }

    return (
        <>
            <section className="mt-40">
                <div className="flex flex-col gap-10 justify-around">

                    <h2 className="titles text-4xl font-semibold text-center">Consultar reservas</h2>

                    <div className="flex gap-2 flex-col mx-2">

                        <form action="" method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
                            <input
                                maxLength={15}
                                type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />
                        </form>
                        <div className="flex justify-center px-6 mt-4">
                            <a
                            onClick={handleAlert}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                                Consultar reservas</a>

                        </div>
                        <div className="mt-20">
                            <CardReservation
                                name="Nombre de ejemplo"
                                email="correo@ejemplo.com"
                                cedula="123456789"
                                telefono="555-1234"
                                Npersonas="4"
                                fecha="2024-06-01 19:00"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function CreateReservation() {
    const [showAlert, setShowAlert] = useState(false)
    const [peopleCount, setPeopleCount] = useState("")
    const now = new Date()
    const date = now.toLocaleString("es")

    const handleAlert = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva creada!",
            text: `Creaste tu reserva para el día y hora: ${date}!`,
            icon: "success"
        });
    }

    const HandleNumberDiners = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 2 && value > 0 && value <= 12) {
            setPeopleCount(value);
        }
    }
    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around shadow-2xl p-10 rounded-xl bg-[url('/bgs/test.png')] bg-cover bg-no-repeat bg-center w-full">

                <h2 className="titles text-4xl font-semibold text-center">Reservar</h2>

                <div className="containerCreateReservation flex gap-2 flex-col mx-4 max-w-[510px]">

                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Nombre</span>
                            <input
                                maxLength={50}
                                type="text" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg w-full" />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Teléfono</span>
                            <input
                                maxLength={15}
                                type="tel" className="cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-lg" />
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold">Cédula</span>
                            <input
                                maxLength={15}
                                type="tel" className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                        </label>

                        <label className="labelResponsive">
                            <span className="text-lg font-semibold mb-2">Número de personas</span>
                            <input
                                type="number"
                                value={peopleCount}
                                onChange={HandleNumberDiners}
                                className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg"
                            />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="text-lg font-semibold mb-2">Email</span>
                            <input
                                maxLength={70}
                                type="email" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" required />
                        </label>

                        <label className="w-full flex flex-col">
                            <span className="text-lg font-semibold mb-2"> Fecha a reservar</span>
                            <Calendar />
                        </label>

                    </form>

                    <div className="container-btns-reservation flex justify-center px-6 mt-4 flex-nowrap gap-2">
                        <a
                            onClick={handleAlert}
                            className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                            Reservar</a>
                    </div>
                </div>
            </section>
        </>
    );
}

function UpdateReservation() {
    const [peopleCount, setPeopleCount] = useState("")
    const [cedula, setCedula] = useState("")
    const [clave, setClave] = useState("")
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const now = new Date()
    const date = now.toLocaleString("es")
    const Mockcedula = "123"
    const Mockclave = "as"

    const handleAlert = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva actualizada!",
            text: `Actualizaste tu reserva para el día y hora: ${date}!`,
            icon: "success"
        });
    }

    const handleSecurity = (e) => {
        e.preventDefault();

        if (cedula == Mockcedula && clave == String(Mockclave)) {
            setShowUpdateForm(true)
        } else {
            setError(true)
            console.log("clave o cédula errónea");
        }
    }

    const handleMessage = () => {
        setMessage(prev => !prev);
        setTimeout(() => {
            setMessage(false);
        }, 8000)
    }

    const HandleNumberDiners = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 2 && value <= 12) {
            setPeopleCount(value);
        }
    }

    return (
        <>
            {showUpdateForm ? (
                <section className="flex flex-col gap-10 mt-40 justify-around shadow-2xl p-10 rounded-xl bg-[url('/bgs/test.png')] bg-cover bg-no-repeat bg-center w-full">

                    <h2 className="titles text-4xl font-semibold text-center">Actualizar reserva</h2>

                    <div className="containerCreateReservation flex gap-2 flex-col mx-4 max-w-[510px]">

                        <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Nombre</span>
                                <input
                                    disabled
                                    type="text"
                                    className="bg-white cursor-pointer  border-gray-800 border flex px-4 py-2 rounded-lg w-full" />
                            </label>

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Teléfono</span>
                                <input
                                    maxLength={15}
                                    type="number" className="cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-lg" />
                            </label>

                            <label className="labelResponsive">
                                <span className="text-lg font-semibold">Cédula</span>
                                <input disabled type="number" className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" />
                            </label>

                            <label className="labelResponsive">
                                <span className="text-lg font-semibold mb-2">Número de personas</span>
                                <input
                                    type="number"
                                    value={peopleCount}
                                    onChange={HandleNumberDiners}
                                    className="mt-2 cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg"
                                />
                            </label>

                            <label className="flex flex-col w-full">
                                <span className="text-lg font-semibold mb-2">Email</span>
                                <input disabled type="email" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-lg" required />
                            </label>

                            <label className="w-full flex flex-col">
                                <span className="text-lg font-semibold mb-2">Fecha a actualizar</span>
                                <Calendar />
                            </label>

                        </form>

                        <div className="container-btns-reservation flex justify-center px-6 mt-4 flex-nowrap gap-2">
                            <a
                                onClick={handleAlert}
                                className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                                Actualizar reserva</a>
                        </div>
                    </div>
                </section>
            ) : (

                <section className="flex flex-col gap-10 mt-40 justify-around mx-2">
                    <h2 className="titles text-4xl font-semibold text-center text-nowrap">Actualizar reserva</h2>

                    <div className="flex gap-2 flex-col">

                        <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">

                            <input
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                maxLength={16}
                                type="text" className="cursor-pointer  border-gray-800 border bg-white flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />
                            <label className="w-full relative">
                                <CircleQuestionMark
                                    onClick={handleMessage}
                                    className="absolute right-0 mt-2 mr-4 cursor-pointer" />
                                <input
                                    value={clave}
                                    onChange={(e) => setClave(e.target.value)}
                                    maxLength={30}
                                    type="text" className="w-full cursor-pointer border border-gray-800 bg-white flex px-4 py-2 rounded-2xl" placeholder="Clave privada" required title="La clave privada fue enviada al correo" />

                                <p
                                    style={{ display: message ? 'block' : 'none' }}
                                    id="message" className="w-fit px-4 py-2 font-semibold absolute top-0 right-0 mr-8 text-gray-600">La clave privada fue enviada al correo</p>

                            </label>

                            {error &&
                                <p className="text-red-500 font-semibold text-md text-center w-full">La cédula o la clave es erronea</p>
                            }

                            <div className="container-btns-reservation w-full flex justify-center px-6 mt-4 flex-wrap gap-2">
                                <button
                                    onClick={handleSecurity}
                                    className="border-6 border-double bg-amber-500 px-8 py-2 rounded-xl hover:bg-amber-500 cursor-pointer hover:scale-105 ease-in-out duration-300   font-bold">
                                    Actualizar reserva</button>
                            </div>
                        </form>

                    </div>
                </section>
            )}
        </>
    )
}

function DeleteReservation() {
    const [clave, setClave] = useState("")
    const [cedula, setCedula] = useState("")
    const [error, setError] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const deleteModal = useRef<HTMLDialogElement>(null)
    const confirmDeleteModal = useRef<HTMLDialogElement>(null)
    const overlay = useRef<HTMLDivElement>(null)

    const now = new Date()
    const date = now.toLocaleString("es")
    const name = "Emmanuel Guerra"
    const Mockcedula = "123"
    const Mockclave = "as"

    const handleAlert = () => {
        setShowAlert(prev => !prev)
        Swal.fire({
            title: "Reserva Eliminada!",
            text: `Eliminaste tu reserva para el día y hora: ${date}!`,
            icon: "success"
        });
         if (confirmDeleteModal.current) {
            confirmDeleteModal.current.close();
        }

        if (overlay.current) {
            overlay.current.classList.remove("active")
        }
    }

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
            deleteModal.current?.close();
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
                    onClick={handleAlert}
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

export default function ContainerReservation() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <HeaderReservation />
                <main className="flex-grow">
                </main>
                <Footer />
            </div>
        </>

    );
}

export { GetReservation, CreateReservation, UpdateReservation, DeleteReservation }