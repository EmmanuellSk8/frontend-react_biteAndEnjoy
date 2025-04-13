  import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import PreMenu from './PreMenu';
import Menu from './Menu';
import '../index.css';


export default function ContainerMenu() {

    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuVisible(state => !state);
    }

    return (

        <>

                <div id='Menu' className="flex justify-around px-20 gap-10 mt-40 flex-wrap mr-3 w-full">
                    <div className="flex flex-wrap justify-between w-[1600px] gap-4">

                        <h2 className='text-3xl font-semibold titles'>Menú</h2>

                        <div>
                            {isMenuVisible && (
                                <Link to="/home/maxmenu">
                                    <button
                                        className=' bg-amber-600 flex py-2.5 px-5 rounded-xl text-amber-50 font-bold cursor-pointer hover:scale-110 duration-300 ease-in-out'
                                        onClick={toggleMenu}
                                    >
                                        Ver menú completo
                                    </button>
                                </Link>
                            )}

                            {!isMenuVisible && (
                                <Link to="/home/minmenu">
                                    <button
                                        className='bg-amber-600 py-2.5 px-5 rounded-xl text-amber-50 font-bold cursor-pointer hover:scale-110 duration-300 ease-in-out'
                                        onClick={toggleMenu}
                                    >
                                        Contraer menú
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-around">
                    <div className="flex flex-wrap w-[1600px] pr-15">

                        <Routes>
                            <Route path="/" element={<PreMenu />} />
                            <Route path="minmenu" element={<PreMenu />} />
                            <Route path="maxmenu" element={<Menu />} />
                        </Routes>
                    </div>
                </div>


        </>
    );

}