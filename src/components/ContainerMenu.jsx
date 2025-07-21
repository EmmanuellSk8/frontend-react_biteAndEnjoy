import { useLocation, Link } from 'react-router-dom';
import Menu from './Menu';
import PreMenu from './PreMenu';

export default function ContainerMenu() {
  const location = useLocation();
  const isMaxMenu = location.pathname.includes('/home/maxmenu');

  return (
    <>
      <div id="Menu" className="flex justify-around px-2 gap-10 mt-40 flex-wrap w-full">
        <div className="flex flex-nowrap justify-between w-[1600px]">
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

      <div className="w-full flex justify-around">
        <div className="flex flex-wrap w-[1600px] pr-15">
          {isMaxMenu ? <Menu /> : <PreMenu />}
        </div>
      </div>
    </>
  );
}
