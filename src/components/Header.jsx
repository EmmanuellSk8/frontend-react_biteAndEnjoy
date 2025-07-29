import Logo from "/icon.png";
import { useState } from "react";
import "../index.css"
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {

    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMenu = () => {
        setMenuMobile(!menuMobile);
    };

    return (
        <>

            <header id="menu" className="w-full justify-center p-4 bg-white shadow-md fixed top-0 z-10">
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
                        <a href="#" className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                            <img src={Logo} alt="Logo" className="w-12 h-12" />
                            <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
                        </a>
                        <button onClick={toggleMenu} id="btnMenuMobile" className="flex text-xl items-center font-semibold cursor-pointer">
                            <Menu/>
                        </button>
                    </div>

                </header>

                {menuMobile && (

                    <div id="menuMobile" className="w-full flex justify-center">

                        <nav id="menuMobile2" className="flex-col gap-6 py-6 gap-x-40 mt-20 border-t-2 duration-300 ease-in-out bg-white shadow-md w-full flex items-center z-10">
                            <a onClick={toggleMenu} href="#" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Inicio</a>
                            <a onClick={toggleMenu} href="#Menu" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Menú</a>
                            <a onClick={toggleMenu} href="#About" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Nosotros</a>
                            <Link onClick={toggleMenu} to="/Reservations" target="_blank">
                                <button href="" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservas</button>
                            </Link>

                        </nav>
                    </div>
                )}
            </div>

        </>
    )
}