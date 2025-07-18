import '../index.css';
import Hero from './Hero';
import PostHero from './PostHero';
import About from './About';
import ContainerMenu from './ContainerMenu';
import Footer from './Footer';
import Client from './Clients';
import MarqueeCards from './Test';

export default function ContainerHomePage() {

    return (

        <>
            <Hero />
            <PostHero />
            <ContainerMenu />
            <MarqueeCards/>
            {/* <Client/> */}
            <About />
            <Footer/>
        </>
    )

}