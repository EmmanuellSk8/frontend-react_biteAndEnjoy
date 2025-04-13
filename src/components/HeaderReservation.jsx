import Logo from "../assets/icon.png";
import React, { useState } from "react";
import "../index.css"
import { Link, Route, Routes } from "react-router-dom";
import ContainerReservation from "./ContainerReservation"
import GetReservation from "./GetReservation";
import CreateReservation from "./CreateReservation";
import UpdateReservation from "./UpdateReservation";
import DeleteReservation from "./DeleteReservation";

export default function HeaderReservation() {

    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMenu = () => {
        setMenuMobile(!menuMobile);
    };

    return (

        <>
            <header id="menuReservations" className="w-full justify-center p-4 bg-white shadow-md fixed top-0">
                <nav className="headerReservation flex flex-wrap justify-center items-center gap-x-40">

                    <Link to="/reservations/create">
                        <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservar</button>
                    </Link>

                    <Link to="/reservations/get">
                        <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Consultar reserva</button>
                    </Link>

                    <Link to="/home">
                        <button className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                            <img src={Logo} alt="Logo" className="w-12 h-12" />
                            <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
                        </button>
                    </Link>

                    <Link to="/reservations/update">
                        <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Actualizar reserva</button>
                    </Link>


                    <Link to="/reservations/delete">
                        <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Eliminar reserva</button>
                    </Link>
                </nav>
            </header>

            <div id="menuMobileReservations" className="flex w-full fixed top-0 z-10">

                <header id="menuMobileReservations" className="w-full flex justify-center p-4 bg-white shadow-md top-0 z-10 fixed">

                    <div className="flex items-center gap-4 justify-between w-full">

                        <Link to="/home">
                        <button className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                            <img src={Logo} alt="Logo" className="w-12 h-12" />
                            <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
                        </button>
                        </Link>

                        <p onClick={toggleMenu} id="btnMenuMobile" className="flex text-xl items-center font-semibold cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                        </p>
                    </div>

                </header>

                {menuMobile && (

                    <div id="menuMobileReservations" className="w-full flex justify-center">

                        <nav id="menuMobile2" className="flex-col gap-6 py-6 gap-x-40 mt-20 border-t-2 duration-500 ease-in-out bg-white shadow-md w-full flex items-center z-10">
                            <Link to="/reservations/create">
                            <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservar</button>
                            </Link>
                            
                            <Link to="/reservations/get">
                            <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Consultar reserva</button>
                            </Link>

                            <Link to="/reservations/update">
                            <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Actualizar reserva</button>
                            </Link>

                            <Link to="/reservations/delete">
                            <button className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Eliminar reserva</button>
                            </Link>

                        </nav>
                    </div>
                )}
            </div>
            
            <Routes>
                <Route path="/" element={<CreateReservation />} />
                <Route path="/create" element={<CreateReservation />} />
                <Route path="/get" element={<GetReservation />} />
                <Route path="/update" element={<UpdateReservation />} />
                <Route path="/delete" element={<DeleteReservation />} />
            </Routes>
        </>


    )
}
