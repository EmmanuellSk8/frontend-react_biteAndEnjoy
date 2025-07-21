import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ReservationHeader from '../components/HeaderReservation';
import ContainerMenu from '../components/ContainerMenu';
import Footer from '../components/Footer';
import About from '../components/About';
import Clients from '../components/Clients';
import PostHero from '../components/PostHero';
import Hero from '../components/Hero';

function HomePage() {

  const location = useLocation();
  const isReservationsPath = location.pathname.startsWith("/Reservations")

  return (
    <section className='w-full justify-center items-center flex flex-col'>
      {!isReservationsPath ? <Header /> : <ReservationHeader />}
      <Hero />
      <PostHero />
      <ContainerMenu />
      <Clients />
      <About />
      <Footer />
    </section>
  );
}

export default HomePage;