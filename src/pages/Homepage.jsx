import { useLocation } from 'react-router-dom';
import ContainerMenu from '../components/Menu';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import PostHero from '../components/PostHero';
import { Hero } from '../components/Hero';
import AboutUs from '../components/AboutUs';
import { HeaderHomePage, HeaderReservation } from '../components/Headers';

function HomePage() {

  const location = useLocation();
  const isReservationsPath = location.pathname.startsWith("/Reservations")

  return (
    <section className='w-full justify-center items-center flex flex-col bodyHomePage'>
      {!isReservationsPath ? <HeaderHomePage /> : <HeaderReservation />}
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