import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ReservationHeader from '../components/HeaderReservation';
import ContainerMenu from '../components/ContainerMenu';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import PostHero from '../components/PostHero';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

function HomePage() {

  const location = useLocation();
  const isReservationsPath = location.pathname.startsWith("/Reservations")

  return (
    <section className='w-full justify-center items-center flex flex-col bodyHomePage'>
      {!isReservationsPath ? <Header /> : <ReservationHeader />}
      <div className="bgBodyHomePage"></div>
      <Hero />
      <PostHero />
      <ContainerMenu />
      <Clients />
      <AboutUs />
      <Footer />
    </section>
  );
}

export default HomePage;