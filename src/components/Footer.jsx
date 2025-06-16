import logo from '../assets/icon.png';
import "../index.css"

export default function Footer() {

    return (

        <>
            <footer class="bg-white rounded-lg shadow-sm m-4 w-full mt-40 bottom-0">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="#Hero" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-8" alt="Bite & Enjoy logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap">Bite & Enjoy</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 gap-2">
                            <li>
                                <a href="#Hero" class="hover:text-orange-400 hover:scale-110 duration-200 ease-in-out me-4 md:me-6">Inicio</a>
                            </li>
                            <li>
                                <a href="#Menu" class="hover:text-orange-400 hover:scale-110 duration-200 ease-in-out me-4 md:me-6">Menú</a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-orange-400 hover:scale-110 duration-200 ease-in-out me-4 md:me-6">Reservar</a>
                            </li>
                            <li>
                                <a href="#About" class="hover:text-orange-400 hover:scale-110 duration-200 ease-in-out me-4 md:me-6">Acerca de nosotros</a>
                            </li>

                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-aut lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center">© 2025 Bite & Enjoy™. Casi todos los derechos reservados.</span>
                </div>
            </footer>
        </>
    )

}