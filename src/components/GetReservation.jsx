export default function GetReservation() {

    return (
        <>
 <section className=" flex flex-col gap-10 mt-40 justify-around">
                <h2 className="titles text-4xl font-semibold text-center">Consultar reservas</h2>

                <div className="flex gap-2 flex-col mx-2">

                    <form action="" method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
              
                        <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Cédula" required />

                    </form>

                    <div className="flex justify-center px-6 mt-4">
                        <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 font-bold">
                        Consultar reservas</a>

                    </div>
                </div>
                
            </section>


        </>
    )
}