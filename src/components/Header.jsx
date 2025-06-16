import Logo from "../assets/icon.png";
import React, { useState } from "react";
import "../index.css"
import { Link } from "react-router-dom";

export default function Header() {

    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMenu = () => {
        setMenuMobile(!menuMobile);
    };

    return (
        <>

            <header id="menu" className="w-full justify-center p-4 bg-white shadow-md fixed top-0">
                <nav className="header flex flex-wrap justify-center items-center gap-x-40">
                    <a href="#Hero" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Inicio</a>
                    <a href="#Menu" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Menú</a>
                    <a href="#Hero" className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                        <img src={Logo} alt="Logo" className="w-12 h-12" />
                        <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
                    </a>
                    <a href="#About" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Nosotros</a>

                    <Link to="/Reservations" target="_blank">
                        <button href="#contact" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservas</button>
                    </Link>

                </nav>
            </header>

            <div id="menuMobile" className="flex w-full fixed top-0 z-10">

                <header id="menuMobile" className="w-full flex justify-center p-4 bg-white shadow-md top-0 z-10 fixed">

                    <div className="flex items-center gap-4 justify-between w-full">
                        <a href="#Hero" className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                            <img src={Logo} alt="Logo" className="w-12 h-12" />
                            <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
                        </a>
                        <p onClick={toggleMenu} id="btnMenuMobile" className="flex text-xl items-center font-semibold cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                        </p>
                    </div>

                </header>

                {menuMobile && (

                    <div id="menuMobile" className="w-full flex justify-center">

                        <nav id="menuMobile2" className="flex-col gap-6 py-6 gap-x-40 mt-20 border-t-2 duration-300 ease-in-out bg-white shadow-md w-full flex items-center z-10">
                            <a href="#Hero" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Inicio</a>
                            <a href="#Menu" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Menú</a>
                            <a href="#About" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Nosotros</a>
                            <Link to="/Reservations" target="_blank">
                                <button href="#contact" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservas</button>
                            </Link>

                        </nav>
                    </div>
                )}
            </div>

        </>
    )
}