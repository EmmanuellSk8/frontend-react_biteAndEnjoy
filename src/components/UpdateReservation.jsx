import { useState } from "react";
import Calendar from "./Calendar"
import "../index.css"
import { CircleQuestionMark } from "lucide-react";

export default function UpdateReservation() {
    const [peopleCount, setPeopleCount] = useState("")
    const [cedula, setCedula] = useState("")
    const [clave, setClave] = useState("")
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)

    const Mockcedula = 123
    const Mockclave = "as"

    const handleCedula = (e) => {
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
                            <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                                Reservar</a>
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
                                    onClick={handleCedula}
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
