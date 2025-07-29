import { User2 } from "lucide-react"

type CardReservationProps = {
    id?: string;
    name: string;
    email: string;
    cedula: string;
    telefono: string;
    Npersonas: string;
    fecha: string;
};

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
                    <p className="text-gray-600">Fehcha y hora</p>
                    <p>{fecha}</p>
                </div>

            </div>
        </div>
    )
}

export default function GetReservation() {

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
                            <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
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