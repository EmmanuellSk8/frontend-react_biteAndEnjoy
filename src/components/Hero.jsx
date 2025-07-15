import postreHero from '../assets/postreHero.png';
import Bg from '../assets/bg-imgs-hero.png';
import { Link, Route, Routes } from 'react-router-dom';
import ContainerReservation from './ContainerReservation';
import AtroposCard from './Atropos';
import "../index.css"
import ArrowIcon from './icons/ArrowIcon';

export default function Hero() {

    return (
        <>
            <section id='Hero' className="w-[full] flex flex-wrap">

                <div className="max-w-[1600px] flex mt-40 flex-wrap justify-between items-center content-center">
                    <div id='textHero' className="max-w-[550px] flex flex-col gap-4">

                        <h2 className="flex flex-col text-5xl gap-1.5 text-amber-300/80">Platos Cargados de sabor
                            <span className="txt-transparent-hero text-transparent">Para los amantes de la comida</span>
                        </h2>

                        <p className="text-xl text-rose-700">Descubre una explosión de sabores en cada bocado.
                            Desde recetas caseras hasta delicias gourmet,
                            aquí encontrarás el plato perfecto para satisfacer tu antojo.
                            ¡Déjate llevar por el aroma y el buen gusto!</p>

                        <div className="flex gap-4">

                            <a href="#Menu" className="btns-hero-menu cursor-pointer mt-4 gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl duration-300 ease-in-out items-center border-4 border-double text-nowrap">¡Ver menú!
                                <ArrowIcon className="svgMenu"/>
                            </a>
                               
                            <Link to="/reservations">
                                <button href="#" className="btns-hero reservar cursor-pointer mt-4 gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl duration-300 ease-in-out items-center border-4 border-double">¡Reservar!
                                    <ArrowIcon id='svg'/>
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div id='container-imgs-hero' className='flex-row-reverse flex items-end'>
                        <img id='bgImgsHero' className='absolute -z-10 opacity-15 w-[550px]' src={Bg} alt="img" />
                                <AtroposCard/>

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