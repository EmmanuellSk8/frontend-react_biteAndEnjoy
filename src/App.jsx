import { Navigate } from 'react-router-dom';
import ContainerReservation from './components/ContainerReservation';
import { Route, Routes } from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/Homepage';

function App() {

  return (
    <section className='w-full justify-center items-center flex flex-col'>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/Reservations/*" element={<ContainerReservation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;