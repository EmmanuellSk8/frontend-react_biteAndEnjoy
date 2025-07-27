import Contact from "./Contact";

export default function About() {

    return (
        <>

            <section id="About" className="w-full justify-around flex flex-wrap mx-10 mt-8">
                <div className="w-[1600px]">
                    <h2 className="titles text-4xl text-center font-semibold">Sobre nosotros</h2>
                    <div className="mt-26">
                        <h2 className="titles text-3xl mb-4 text-orange-500 font-medium ml-2">Ubicación</h2>
                        <iframe className="w-4/4 h-96 rounded-2xl " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.359662458155!2d-75.62241111984584!3d6.244287171743178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1743092104985!5m2!1ses!2sco"></iframe>
                    </div>

                    <div className="mt-32 border-1 border-gray-300 rounded-2xl p-14">

                        <Contact />

                    </div>
                </div>
            </section>

        </>
    );

}