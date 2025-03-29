import ImgHero from '../assets/imgHero.png';
import postreHero from '../assets/postreHero.png';
import Bg from '../assets/bg-imgs-hero.png';

export default function Hero() {

    return (

        <>
<div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {/* <div class="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div> */}
            {/* <div class="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
            {/* <div class="fixed top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
            <section id='Hero' className="w-[full] flex flex-wrap">

                <div className="max-w-[1600px] flex mt-40 flex-wrap justify-between items-center content-center">
                    <div id='textHero' className="max-w-[550px] flex flex-col gap-4">

                        <h2 className="flex flex-col text-5xl gap-1.5">Platos Cargados de sabor
                            <span className="text-amber-300/90">Para los amantes de la comida</span>
                        </h2>

                        <p className="text-xl text-rose-700">Descubre una explosión de sabores en cada bocado.
                            Desde recetas caseras hasta delicias gourmet,
                            aquí encontrarás el plato perfecto para satisfacer tu antojo.
                            ¡Déjate llevar por el aroma y el buen gusto!</p>

                        <div className="flex gap-4">

                            <a href="menu" className="btns-hero mt-4 gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl hover:rotate-12 duration-300 ease-in-out items-center border-4 border-double">¡Ver menú!
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                            </a>

                            <a href="#" className="btns-hero mt-4 gap-1.5 flex font-extrabold bg-amber-100 w-fit text-black py-2 px-5 rounded-xl hover:rotate-12 duration-300 ease-in-out items-center border-4 border-double">¡Reservar!
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                            </a>

                        </div>
                    </div>

                    <div id='container-imgs-hero' className='flex-row-reverse flex items-end'>
                        <img id='bgImgsHero' className='absolute -z-10 opacity-15 w-[550px]' src={Bg} alt="img" />
                        <img id='bigImg' className=' duration-900 hover:rotate-z-[360deg] cursor-pointer' src={ImgHero} alt="img" />
                        <img className='smallImg size-40 duration-900 hover:rotate-z-[360deg] cursor-pointer hover:scale-125' src={postreHero} alt="img" />
                    </div>
                </div>

            </section>
        </>
    )
}