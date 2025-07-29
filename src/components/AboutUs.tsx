import { Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Swapy } from 'swapy'
import { createSwapy } from 'swapy'

function AboutUs() {
    const swapyRef = useRef<Swapy | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            swapyRef.current = createSwapy(containerRef.current, {
                animation: 'spring',
                swapMode: 'hover',
            })

            swapyRef.current.onBeforeSwap((event) => {
                console.log('beforeSwap', event)
                return true
            })

            swapyRef.current.onSwapStart((event) => {
                console.log('start', event);
            })
            swapyRef.current.onSwap((event) => {
                console.log('swap', event);
            })
            swapyRef.current.onSwapEnd((event) => {
                console.log('end', event);
            })
        }
        return () => {
            swapyRef.current?.destroy()
        }
    }, [])
    return (
        <section id='About' className="bgAboutUs w-full px-2 mt-32">
            <h2 className='text-4xl font-semibold titles text-center mb-10'>Sobre nosotros</h2>
            <div className="container p-14 max-[930px]:p-8 max-[680px]:p-2 border-1 border-gray-300 rounded-2xl" ref={containerRef}>

                <div className="slot top border-1 border-gray-300" data-swapy-slot="a">
                    <div className="item item-a" data-swapy-item="a">
                        <iframe className="w-4/4 h-96 rounded-2xl " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.359662458155!2d-75.62241111984584!3d6.244287171743178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1743092104985!5m2!1ses!2sco"></iframe>
                    </div>
                </div>

                <div className="middle">
                    <div className="slot middle-left border-1 border-gray-300" data-swapy-slot="b">
                        <div className="item item-b" data-swapy-item="b">
                            <div className="handle" ></div>
                            <div className="flex flex-col cursor-pointer items-center justify-center text-center py-15 rounded-lg duration-200 ease-in-out bg-[#F3F4F6] w-full h-full">
                                <span className="p-3 text-orange-500  rounded-md bg-gray-800">
                                   <Mail/>
                                </span>

                                <h2 className="mt-4 text-2xl font-medium">Email</h2>
                                <p className="mt-2 text-gray-900 font-semibold text-lg">Estamos a tu disposición para ayudar.</p>
                                <p className="mt-2 text-orange-500 font-medium text-s">biteAndEnjoy@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="slot middle-right border-1 border-gray-300" data-swapy-slot="c">
                        <div className="item item-c overflow-hidden" data-swapy-item="c">
                            <div className="handle"></div>
                            <div className="flex flex-col py-15 cursor-pointer items-center justify-center text-center rounded-lg duration-200 ease-in-out bg-[#FDF6E7] w-full">
                                <span className="p-3 text-orange-500 rounded-md bg-gray-800">
                                   <MapPin/>
                                </span>

                                <h2 className="mt-4 text-2xl font-medium">Restaurante</h2>
                                <p className="mt-2 text-gray-900 font-semibold text-lg">Ven a probar la mejor sazón.</p>
                                <p className="mt-2 text-orange-500 font-medium text-s">Medellín, antioquia, Colombia.</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="slot bottom border-1 border-gray-300" data-swapy-slot="d">
                    <div className="item item-d overflow-hidden" data-swapy-item="d">
                        <div className="flex flex-col cursor-pointer items-center justify-center text-center rounded-lg duration-200 ease-in-out w-full h-full bg-[#F3FAFF] py-8">
                            <span className="p-3 text-orange-500 rounded-md bg-gray-800">
                               <Phone/>
                            </span>

                            <h2 className="mt-4 text-2xl font-medium">Celular</h2>
                            <p className="mt-2 text-gray-900 font-semibold text-lg">Lunes-Domingo de 8:00am a 10:00pm.</p>
                            <p className="mt-2 text-orange-500 font-medium text-s"> 314 201-8695</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs