import postreHero from '/postreHero.png';
import Bg from '/bgs/bg-imgs-hero.png';
import { Link, Route, Routes } from 'react-router-dom';
import ContainerReservation from './ContainerReservation';
import AtroposCard from './Atropos';
import "../index.css"
import {ChevronsRight } from 'lucide-react';

export default function Hero() {

    return (
        <>
            <section id='Hero' className="w-full flex h-dvh justify-center py-10 max-[1304px]:h-full">
                <div className="max-w-[1600px] flex justify-between mx-10 max-[1304px]:mt-32 max-[1200px]:flex-wrap max-[1200px]:justify-center items-center content-center max-sm:h-fit gap-6">
                    <div id='textHero' className="max-w-[550px] flex flex-col gap-4">

                        <h2 className="flex flex-col text-5xl gap-1.5 text-amber-300/80 mx-2">Platos Cargados de sabor
                            <span className="txt-transparent-hero text-transparent">Para los amantes de la comida</span>
                        </h2>

                        <p className="text-xl text-rose-700 mx-2">Descubre una explosión de sabores en cada bocado.
                            Desde recetas caseras hasta delicias gourmet,
                            aquí encontrarás el plato perfecto para satisfacer tu antojo.
                            ¡Déjate llevar por el aroma y el buen gusto!</p>

                        <div className="flex gap-4 mt-4">

                            <a href="#Menu" className="btns-hero-menu cursor-pointer gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl duration-300 ease-in-out items-center border-4 border-double max-[380px]:px-2 text-nowrap">¡Ver menú!
                                <ChevronsRight className="svgMenu" />
                            </a>

                            <Link to="/reservations" target='_blank'>
                                <button href="#" className="btns-hero reservar cursor-pointer gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl duration-300 ease-in-out items-center border-4 border-double max-[380px]:px-2">¡Reservar!
                                    <ChevronsRight id='svg' />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div id='container-imgs-hero' className='flex-row-reverse flex items-end'>
                        <img id='bgImgsHero' className='absolute opacity-15 w-[550px] max-[770px]:hidden' src={Bg} alt="img" />
                        <AtroposCard />

                        <img className='smallImg size-40 duration-900 hover:rotate-z-[360deg] cursor-pointer hover:scale-125' src={postreHero} alt="img" />
                    </div>
                </div>
            </section>

            <Routes>
                <Route path="/Reservations" element={<ContainerReservation />} />
            </Routes>
        </>
    )
}