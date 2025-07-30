import { useLocation, Link } from 'react-router-dom';
import Data from '../assets/data/data';
import { CardDishProps } from '../types/CardDishProps';

function CardDish({name, ingredients, img, entradas}: CardDishProps) {

    return (
        <>
            <article className="cursor-pointer shadow-xl flex flex-col justify-between items-center py-8 px-8 bg-white/80 rounded-xl border-1 border-gray-200 h-[500px] max-[830px]:h-[550px] relative">
                <div className="relative">
                    <img className="size-72 object-cover aspect-square rounded-xl mb-6" src={img} alt={name} />
                </div>
                <div className="flex flex-col gap-4 w-full px-8 top-86 absolute justify-between">
                    <div className="flex justify-between items-center">
                    <h3 className='text-xl font-semibold text-black/80'>{name}</h3>
                    <h3 className='text-nowrap text-sm font-semibold text-zinc-600 border-1 border-gray-600 px-3 rounded-xl'>{entradas}</h3>
                    </div>
                    <p><strong className="text-rose-500">Ingredientes: </strong><span className='text-gray-800 font-medium overflow-hidden max-w-80 block truncate whitespace-normal' >{ingredients}</span> </p>
                </div>
            </article>
        </>
    );
}

function FullMenu() {

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

function MinMenu() {
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

export default function ContainerMenu() {
  const location = useLocation();
  const isMaxMenu = location.pathname.includes('/home/maxmenu');

  return (
    <>
      <section id='Menu' className='bgMenu w-full flex justify-center'>
        <div className="bgMinMenu w-[1600px] flex justify-center my-40 rounded-xl mx-10">
          <div className="w-full flex flex-wrap p-10">

            <div className="flex justify-between px-2 flex-wrap w-full">
              <div className="flex justify-between w-full gap-4">
                <h2 className="text-3xl font-semibold titles">Menú</h2>
                <div>
                  {isMaxMenu ? (
                    <Link to="/home/minmenu">
                      <button className="bg-amber-600 py-2.5 px-5 rounded-xl text-amber-50 font-bold cursor-pointer hover:scale-110 duration-300 ease-in-out text-nowrap">
                        Contraer menú
                      </button>
                    </Link>
                  ) : (
                    <Link to="/home/maxmenu">
                      <button className="bg-amber-600 flex py-2.5 px-5 rounded-xl text-amber-50 font-bold cursor-pointer hover:scale-110 duration-300 ease-in-out text-nowrap">
                        Ver menú completo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="flex flex-wrap">
                {isMaxMenu ? <FullMenu /> : <MinMenu />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}