export default function PostHero() {
    return (
        <>

            <div className="border-solid bg-amber-200 text-amber-300 w-full "></div>
            <section id="postHero" className="w-full flex flex-wrap items-center justify-center">

                <div className="w-[1600px] flex flex-wrap justify-around gap-40">

                    <div className="first-container max-w-[1200px] flex-wrap flex flex-row gap-20">
                        <img className="max-w-96 rounded-r-4xl" src="https://visitarmedellin.com/wp-content/uploads/2023/07/Al-Alma-Cafe.jpg" alt="" />
                        <div className="max-w-[500px] gap-10 flex flex-col ">
                            <h2 className="text-3xl text-blue-400 font-semibold titles"> Brindamos experiencias únicas</h2>
                            <p className="text-xl txt-postHero">Cada plato es más que una comida: es un viaje de sabores, texturas y aromas que despiertan los sentidos. Nos apasiona ofrecer momentos memorables, donde cada bocado cuenta una historia y cada visita se convierte en una experiencia inolvidable. ¡Déjate sorprender y disfruta como nunca!</p>
                        </div>
                    </div>

                    <div className="second-container max-w-[1200px] flex-wrap flex flex-row gap-20">
                        <div className="max-w-[500px] gap-10 flex flex-col ">
                            <h2 className="text-3xl text-blue-400 font-semibold titles">Espacios únicos</h2>
                            <p className="text-xl txt-postHero">Más que un restaurante, somos un destino donde la calidez y el buen gusto se fusionan. Nuestros espacios están diseñados para que vivas momentos especiales, ya sea en una cena íntima o una reunión con amigos. La atmósfera perfecta para disfrutar de una experiencia auténtica.</p>
                        </div>
                        <img className="postheroimg2 max-w-96 h-96 rounded-l-4xl" src="https://plus.unsplash.com/premium_photo-1661954531673-440d23a6eb79?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </section>
        </>
    );
}