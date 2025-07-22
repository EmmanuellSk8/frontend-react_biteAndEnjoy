import Atropos from 'atropos/react';
import 'atropos/css';
import ImgHero from '/imgHero.png';

export default function AtroposCard() {
  return (
    <Atropos
      shadowOffset={50}
      shadow={false}
    >
      <img
        src={ImgHero}
        alt="Plato"
        data-atropos-offset="5"
        style={{ width: '100%', borderRadius: '0.5rem' }}
      />   
    </Atropos>
  );
}