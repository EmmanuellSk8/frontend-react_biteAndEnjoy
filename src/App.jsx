import React from 'react';
import { Navigate, RouterProvider, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ContainerHomePage from './components/ContainerHomePage';
import ContainerReservation from './components/ContainerReservation';
import ReservationHeader from './components/HeaderReservation';
import { Link, Route, Routes } from "react-router-dom";
import Calendar from './components/Calendat';


function App() {

  const location = useLocation();
  const isReservationsPath = location.pathname.startsWith("/Reservations")

  return (
    <section className='w-full justify-center items-center flex flex-col'>

      <Calendar/>
    </section>


  );
}

export default App;