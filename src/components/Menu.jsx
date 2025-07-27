import Data from '../assets/data/data';
import CardDish from "./CardDish";

export default function Menu() {

// Removed incorrect ingredientes mapping, will pass ingredients per dish below.
const ingredientes = (id) => {
    const dish = Data.platillos.find((dish) => dish.id === id);
    return dish && dish.ingredientes ? dish.ingredientes.join(', ') : '';
};
    return (
        <>
            <section className="flex flex-col gap-10 mt-14">

                <div className="flex flex-wrap gap-10 justify-center">
                    {Data.platillos.map((dish) => (
                        <div key={dish.id}>
                        <CardDish name={dish.nombre} ingredients={ingredientes(dish.id)} img={dish.img} entradas={dish.categoria} />
                        </div>
                    ))}               
                </div>
            </section>
        </>
    );
}