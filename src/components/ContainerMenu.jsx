import { useLocation, Link } from 'react-router-dom';
import Menu from './Menu';
import PreMenu from './PreMenu';

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
                {isMaxMenu ? <Menu /> : <PreMenu />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
