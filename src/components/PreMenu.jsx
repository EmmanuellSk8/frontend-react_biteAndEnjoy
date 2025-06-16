import lemon from '../assets/menu/bebidas/Limonada.png'
import pollo from '../assets/menu/platos/pollo.png'
import empanadas from '../assets/menu/platos/empanadas.png'
import mazamorra from '../assets/menu/postres/mazamorra.png'

import CardMenu from "./CardMenu";

export default function PreMenu() {

    return (
        <>
            <section className="flex flex-col gap-10 mt-20">
                <div className="flex justify-between px-20 gap-10">
                    <h2 className='text-3xl font-normal text-orange-500 titles'>Algunos platos</h2>
                </div>

                <div className="w-full flex gap-10 flex-wrap ml-10">

                    <CardMenu name={'pollo teriyaki'} ingredients={'Pechuga de pollo, salsa teriyaki, arroz, sésamo.'} img={pollo} />
                    <CardMenu name={'Empanadas'} ingredients={'carne molida, pollo o papa; y ají.'} img={empanadas} />
                    <CardMenu name={'Mazamorra'} ingredients={'Maíz cocido, leche, panela, bocadillo.'} img={mazamorra} />
                    <CardMenu name={'Limonada de Coco'} ingredients={'Coco, jugo de limón, azúcar, agua, hielo'} img={lemon} />
                </div>
            </section>
        </>

    );
}