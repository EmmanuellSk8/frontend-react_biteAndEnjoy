import lemon from '../assets/menu/bebidas/Limonada.png'
import sandia from '../assets/menu/bebidas/agua-sandia.png'
import budweiser from '../assets/menu/bebidas/budweiser.png'
import cafe from '../assets/menu/bebidas/cafe-frappe.png'
import corona from '../assets/menu/bebidas/corona.png'
import heineken from '../assets/menu/bebidas/heineken.png'
import mojito from '../assets/menu/bebidas/mojito.png'
import pina from '../assets/menu/bebidas/pina-colada.png'
import smoothie from '../assets/menu/bebidas/smoothie.png'

import ajiaco from '../assets/menu/platos/ajiaco.png'
import bandeja from '../assets/menu/platos/bandeja.png'
import calentado from '../assets/menu/platos/calentado.png'
import empanadas from '../assets/menu/platos/empanadas.png'
import pescado from '../assets/menu/platos/pescado.png'
import picada from '../assets/menu/platos/picada.png'
import pollo from '../assets/menu/platos/pollo.png'
import salchipapa from '../assets/menu/platos/salchipapa.png'
import sancocho from '../assets/menu/platos/sancocho.png'
import sudado from '../assets/menu/platos/sudado.png'
import tacos from '../assets/menu/platos/tacos.png'

import arroz from '../assets/menu/postres/arroz.png'
import brevas from '../assets/menu/postres/brevas.png'
import mazamorra from '../assets/menu/postres/mazamorra.png'
import natas from '../assets/menu/postres/postre-de-natas.png'
import leche from '../assets/menu/postres/tres-leches.png'

import CardMenu from "./CardMenu";

export default function Menu() {
    return (
        <>
            <section className="flex flex-col gap-10 mt-20">

                <div className="flex justify-between px-20 gap-10">
                    <h2 className='text-3xl font-normal text-orange-500 titles'>Platos fuertes</h2>
                </div>

                <div className="w-full flex gap-10 mt-10 ml-10 flex-wrap">
                    <CardMenu name={'Bandeja paisa'} ingredients={'Frijoles, arroz, chicharrón, chorizo, huevo frito, arepa, plátano maduro, aguacate.'} img={bandeja} />
                    <CardMenu name={'ajiaco'} ingredients={' Pollo, papa criolla, papa sabanera, guascas, mazorca, alcaparras, crema de leche, arroz.'} img={ajiaco} />
                    <CardMenu name={'calentado'} ingredients={'Arroz, frijoles, carne asada o huevo, arepa, queso fresco y pan.'} img={calentado} />
                    <CardMenu name={'pescado con patacones'} ingredients={' Mojarra, tilapia, bocachico o róbalo, ajo, limón, patacones, arroz de coco.'} img={pescado} />
                    <CardMenu name={'picada'} ingredients={'carne de cerdo & res, pollo, papas, arepa, butifarra.'} img={picada} />
                    <CardMenu name={'sudado de pollo'} ingredients={'Pollo, papa, yuca, plátano, tomate, cebolla, ajo, arroz.'} img={sudado} />
                    <CardMenu name={'sancocho'} ingredients={'Carne (res, pollo o pescado), yuca, plátano, papa, mazorca.'} img={sancocho} />
                    <CardMenu name={'pollo teriyaki'} ingredients={'Pechuga de pollo, salsa teriyaki, arroz, sésamo.'} img={pollo} />
                    <CardMenu name={'tacos al pastor'} ingredients={'Carne de cerdo, piña, cebolla, cilantro y tortillas de maíz.'} img={tacos} />
                    <CardMenu name={'salchipapa'} ingredients={'Papas, salchicha, pollo, 3 huevos de codorníz.'} img={salchipapa} />
                    <CardMenu name={'Empanadas'} ingredients={'carne molida, pollo o papa; y ají.'} img={empanadas} />
                </div>

                <div className="flex justify-between px-20 gap-10 mt-16">
                    <h2 className='text-3xl font-normal text-orange-500 titles'>Bebidas</h2>
                </div>

                <div className="w-full flex gap-10 mt-10 ml-10 flex-wrap">
                    <CardMenu name={'Limonada de coco'} ingredients={'Coco, jugo de limón, azúcar, agua, hielo.'} img={lemon} />
                    <CardMenu name={'Mojito de Maracuyá'} ingredients={' Ron, maracuyá, hojas de menta, azúcar, soda, hielo.'} img={mojito} />
                    <CardMenu name={'Smoothie Tropical'} ingredients={' Mango, piña, banana, yogur, miel, hielo.'} img={smoothie} />
                    <CardMenu name={'CAfé frappé'} ingredients={'Café espresso, leche, azúcar, hielo, crema batida.'} img={cafe} />
                    <CardMenu name={'Jugo de sandía'} ingredients={'Sandía, jugo de limón.'} img={sandia} />
                    <CardMenu name={'Coctel de Piña Colada'} ingredients={'Piña, leche de coco.'} img={pina} />
                    <CardMenu name={'Cerveza Budweiser'} ingredients={'Cebada, lúpulo, agua.'} img={budweiser} />
                    <CardMenu name={'Cerveza Corona'} ingredients={'Cebada, lúpulo, agua.'} img={corona} />
                    <CardMenu name={'Cerveza Heineken'} ingredients={'Cebada, lúpulo, agua.'} img={heineken} />
                </div>

                <div className="flex justify-between px-20 gap-10 mt-16">
                    <h2 className='text-3xl font-normal text-orange-500 titles'>Postres</h2>
                </div>

                <div className="w-full flex gap-10 mt-10 ml-10 flex-wrap">
                    <CardMenu name={'Arroz con leche'} ingredients={'Arroz, leche, azúcar, canela, leche condensada.'} img={arroz} />
                    <CardMenu name={'Brevas con arequipe'} ingredients={'Brevas en almíbar, arequipe, queso.'} img={brevas} />
                    <CardMenu name={'Mazamorra'} ingredients={'Mazamorra, bocadillo y panela.'} img={mazamorra} />
                    <CardMenu name={'Postre de nata'} ingredients={'Leche, azúcar, huevos, canela y fresas.'} img={natas} />
                    <CardMenu name={'Tres leches'} ingredients={' Bizcocho, leche condensada, leche evaporada, crema de leche.'} img={leche} />
                </div>

            </section>
        </>
    );
}