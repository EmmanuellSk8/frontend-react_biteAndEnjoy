import CardDish from "./CardDish";
import Data from '../assets/data/data';

export default function PreMenu() {
    const data = Data.platillos.slice(0, 6);

    const ingredientes = (id) => {
        const dish = Data.platillos.find((dish) => dish.id === id);
        return dish && dish.ingredientes ? dish.ingredientes.join(', ') : '';
    }
        return (
            <>
                <section className="flex flex-col gap-10 mt-14">
                    <div className="flex justify-between gap-10">
                        <h2 className='text-3xl font-normal text-orange-500 titles'>Algunos platos</h2>
                    </div>

                    <div className="flex flex-wrap gap-10 justify-center">
                        {data.map((dish) => (
                            <div key={dish.id}>
                                <CardDish name={dish.nombre} ingredients={ingredientes(dish.id)} img={dish.img} entradas={dish.categoria} />
                            </div>
                        ))}
                    </div>
                </section>
            </>

        );
    }