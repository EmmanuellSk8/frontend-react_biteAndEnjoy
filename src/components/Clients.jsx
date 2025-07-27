const Clients = () => {
    const clients = [
        { img: "https://imgs.search.brave.com/r-keUdxFW6S5sqa5qOC0x2DncVwzqdx5MMh7aTepYho/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/Mzk4MzAyOS9lcy9m/b3RvL3VuYS1tdWpl/ci1qb3Zlbi1jb24t/Y2FiZWxsby1jb3J0/by1zZS10b2NhLWxh/LWJhcmJpbGxhLWNv/bi1lbC1kZWRvLXkt/bWlyYS1oYWNpYS1h/cnJpYmEtY29uLXVu/YS5qcGc_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5HRV9O/MXJkSUlSVndKMDhG/bzJkOVlRVk00MUpS/UE5fbldXTm1MZHd0/YnM9", nombre: "María Rodríguez", account: "@MariaR", recomendacion: "La pasta Alfredo es increíble, muy cremosa y bien servida." },
        { img: "https://imgs.search.brave.com/5JwDfGlPc7djyU5wLGs5sKGooWAPxymzU_xnSwzO3vc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/OTc2Mzg5NS9lcy9m/b3RvL3NvbnJpZW50/ZS1yYXphLW1peHRh/LWhvbWJyZS1tYWR1/cm8tc29icmUtZm9u/ZG8tZ3Jpcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c0dC/d01FWnI4UmR5RnVP/RjAwODR0ZVNUYzFU/d016ZHBIam93UDlR/UldUdz0", nombre: "Juan Pérez", account: "@JuanP", recomendacion: "Recomiendo la hamburguesa doble con queso cheddar, es una locura." },
        { img: "https://imgs.search.brave.com/RRuj-B9L7OyDi_7JLMrI-_V9Twz1IluJ47o_cZWhqcY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzEy/NTEzL3BleGVscy1w/aG90by03MTI1MTMu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw", nombre: "Camila Gómez", account: "@CamilaG", recomendacion: "El sushi es muy fresco, especialmente el rollo de salmón." },
        { img: "https://imgs.search.brave.com/GubUUQaL4RlhkurYUyQkkAwYHPD-eCOcjJeS9bwY5VQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NDkxNzU0OC9lcy9m/b3RvL2hvbWJyZS11/c2FuZG8tdW4tdGVs/JUMzJUE5Zm9uby1p/bnRlbGlnZW50ZS15/LW1pcmFuZG8tbGEt/YyVDMyVBMW1hcmEt/c29icmUtZm9uZG8t/YmxhbmNvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1YRnlB/UFJKWk1iVE1UVkg1/bHNIYXMtU2VmSVVx/V3FoMXdkeWlqRWpN/ajJBPQ", nombre: "Andrés Ramírez", account: "@AndresR", recomendacion: "Prueben las costillas BBQ, se deshacen en la boca." },
        { img: "https://imgs.search.brave.com/B-tiVPShZtB6I2UGbI3UrNPpd2kLQESnvf6711t18_o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/MjA5NTM3Mi9lcy9m/b3RvL211amVyLXJl/dHJhdG8teS1mZWxp/ei1lbi1sYS1vZmlj/aW5hLWNvbi1sb3Mt/YnJhem9zLWNydXph/ZG9zLW1hZ25hdGUt/ZGUtbGEtbW9kYS15/LW9yZ3VsbG8tY29u/LmpwZz9iPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QURzRmx3/UFljbXlKdmtBTUpr/TlhvclV3WEVkZHZf/OWtiOVJSQ3M4TFpZ/MD0", nombre: "Laura Sánchez", account: "@LauraSan", recomendacion: "El ambiente es perfecto para una cena romántica, muy acogedor." },
        { img: "https://imgs.search.brave.com/pvTP9Ft4e9IIJJwdhc9WIjeJopCExdIYr3fccGfEeKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NzAxLzUzMi9zbWFs/bC9jaGVlcmZ1bC1t/YW4taW4tc3VuZ2xh/c3Nlcy1ob2xkaW5n/LWEtZmxvd2VyLW9y/YW5nZS1iYWNrZ3Jv/dW5kLXBob3RvLmpw/Zw", nombre: "Carlos Torres", account: "@CarlosT", recomendacion: "El ceviche mixto es espectacular, bien sazonado y con limón en su punto." },
        { img: "https://imgs.search.brave.com/mkKeCb6Y3KFcGGt9sya4oEIE0A6zwlCxBI54jiPKtwk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/OTAxODU2NS9lcy9m/b3RvL3NvdXRoLWFz/aWFuLXdvbWFuLWxv/b2tpbmctdG8tc2lk/ZS1hZ2FpbnN0LWdy/ZWVuLWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNBSnZxWWw0/dm8tdG9XVHM1cUZp/YmNHeU9lUkxiRFhG/NW5oRDVnUXhlT0k9", nombre: "Ana Martínez", account: "@AnaMart", recomendacion: "La pizza margarita es simple pero deliciosa, masa delgada y buen queso." },
        { img: "https://imgs.search.brave.com/s7Fxyun8hluoeuFqmBwyPIajyapRgSeXEeXy6c_vHG0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yZXRyYXRvLWpv/dmVuLWd1YXBvLWNh/dWNhc2ljby1ob21i/cmUtY2FtaXNhLWpl/YW5zLWFjdHVhY2lv/bi1zZW5hbC1vay1n/ZXN0by1wb3NpY2lv/bl8yMjA1MDctMTk1/NTAuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA", nombre: "Diego Fernández", account: "@DiegoFer", recomendacion: "El lomo saltado es una gran opción, carne tierna y buena porción." },
        { img: "https://imgs.search.brave.com/nUwIfyE5hz3imQleZlR6GnP9Iz8nt-cRsNckCCI3Vh4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/OTM5NTc0OC9lcy9m/b3RvL2FsZWdyZS1t/dWplci1kZS1uZWdv/Y2lvcy1jb24tZ2Fm/YXMtcG9zYW5kby1j/b24tbGFzLW1hbm9z/LWJham8tbGEtY2Fy/YS1tb3N0cmFuZG8t/c3Utc29ucmlzYS1l/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MHk5S0dFSEty/d1JVaFpYMmI3T0gt/U1BVSjl0X0hQZjlE/bGU1a2hUNzdiZz0", nombre: "Valentina Herrera", account: "@ValentinaH", recomendacion: "El postre de tres leches es un must, muy suave y bien húmedo." },
        { img: "https://imgs.search.brave.com/_ZzL9Qz9lkaMT_zepP0-7FErEVLI3W9LfPYaXTT9L58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/MTI1NzMzOS9lcy9m/b3RvL3JldHJhdG8t/ZGUtdW4taG9tYnJl/LW1hZHVyby1mZWxp/ei1jb24tZ2FmYXMt/eS1taXJhbmRvLWEt/bGEtYyVDMyVBMW1h/cmEtZW4tZWwtaW50/ZXJpb3IuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUw4LUlO/RU9idnIyNDFGQ3hT/Wk1sS0VfUzQwYUMy/LXJUdUJuekc0aEVK/cWc9", nombre: "Santiago Díaz", account: "@SantiDiaz", recomendacion: "La limonada de coco es refrescante y muy bien preparada." },
        { img: "https://imgs.search.brave.com/tCK0NbzGfNTPSR7bxLtsJw2dcZF3Zz_aeVgCGjef_6o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NTQ5OTUzNS9lcy9m/b3RvL2ltYWdlbi12/ZXJ0aWNhbC1kZS11/bmEtbXVqZXItYWR1/bHRhLXNvbnJpZW5k/by1jb24tbG9zLWJy/YXpvcy1jcnV6YWRv/cy1taXJhbmRvLWEt/bGEtYyVDMyVBMW1h/cmEtZW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVhxeXNa/LTBqeGt5bTlSaWh0/ZFJfZU5ET25ZcHVR/X0NRVEtodFJFcmxx/eU09", nombre: "Isabella Ruiz", account: "@IsaRuiz", recomendacion: "El servicio es excelente, y el menú es muy variado." },
        { img: "https://imgs.search.brave.com/Rhogw4M3yX0zIpeLQu-Dt-ZdStdwdTCLTqt_J9AzU0I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/MTIxLzExNS9zbWFs/bC9idXNpbmVzcy1t/YW4tc21pbGluZy1m/cmVlLXBob3RvLmpw/Zw", nombre: "Mateo Castro", account: "@MateoCastro", recomendacion: "La arepa rellena de carne desmechada es una delicia." },
        { img: "https://imgs.search.brave.com/qlNUZHiWjSWrcRQLisms-9DFl5pwyC2dyV6wH2zCQ4Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTAx/NjcwMzQyL2VzL2Zv/dG8vcG9ydHJhaXQt/b2YtY29uZmlkZW50/LW1hdHVyZS13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9REZxQzV2ak52/U19ndHF4UlhFZ0Yw/bkpLNnJkOHBHQURn/VHdQQi1sYzlCUT0", nombre: "Daniela Morales", account: "@DaniMorales", recomendacion: "Recomiendo los tacos de camarón, súper crocantes y sabrosos." },
        { img: "https://imgs.search.brave.com/AcOGPBizd2KZtPH15cM2SPVL6Dd-hSPspdIHPsCEla8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9ndWFwby1ob21i/cmUtYmFyYnVkby1l/c3RpbG8tY3J1Y2Vz/LWJyYXpvcy1taXJh/bmRvLWNhbWFyYS1w/aWUtY2FsbGVfNjk1/MjQyLTM5Ni5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw", nombre: "Felipe Gutiérrez", account: "@PipeGutierrez", recomendacion: "El arroz con mariscos tiene mucho sabor y es abundante." },
        { img: "https://imgs.search.brave.com/-4DGrHF0aSpsV21AfdZlLqpZPnCJuM5sE85KZMfqGDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTAz/NjYyMy9wZXhlbHMt/cGhvdG8tMTAzNjYy/My5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", nombre: "Sofía Navarro", account: "@SofiaN", recomendacion: "La sopa de lentejas es casera y reconfortante." },
        { img: "https://imgs.search.brave.com/tyC_ydgSKrmOrnM4KCap7TCseHaNFok-J2HoTcDAt0k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkx/OTEwNDQ5L2VzL2Zv/dG8vc21pbGluZy1i/dXNpbmVzc21hbi13/aXRoLXNtYXJ0LXBo/b25lLWFuZC1jdXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWU3eE5jVjdZNkN1/RDZvZllBY3dWSm5Y/SVZjUVhWd0VMU2dC/TWo0bTB0ZFE9", nombre: "Tomás Vega", account: "@TomasVega", recomendacion: "Prueben el pollo a la brasa con papas criollas, ¡brutal!" },
        { img: "https://imgs.search.brave.com/lNnaSRYRWMImGwH3XDcpOT8P1cy5gkCRLbsYgESXPn4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTMxODUx/MDgvNDYzMDQvaS80/NTAvZGVwb3NpdHBo/b3Rvc180NjMwNDcx/NDYtc3RvY2stcGhv/dG8tcG9zaXRpdmUt/cmVkaGVhZC13b21h/bi1sb29raW5nLWNh/bWVyYS5qcGc", nombre: "Luciana Méndez", account: "@LuciMendez", recomendacion: "El jugo natural de mango biche es súper recomendado." },
        { img: "https://imgs.search.brave.com/WDK6YGiwlTdji5Cthtc6t5MdHKe-CC1xYtHk_BBt77M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTQ1LzkwMi9zbWFs/bC9oYXBweS1tYW4t/d2l0aC1jdXAtb2Yt/Y29mZmVlLWZyZWUt/cGhvdG8uanBn", nombre: "Emilio Cárdenas", account: "@EmilioC", recomendacion: "El desayuno típico es completo y muy sabroso." },
        { img: "https://imgs.search.brave.com/VQWWWMZ2r71Nz1P5-xZFnut3ZUddkOn7zdqrnjKLB58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTE4/MTY5MC9wZXhlbHMt/cGhvdG8tMTE4MTY5/MC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", nombre: "Juliana Pardo", account: "@JuliPardo", recomendacion: "Me encantó el brownie con helado, un cierre perfecto." },
        { img: "https://imgs.search.brave.com/HGeSJIa-IYeRyml8uKEr1WIEM5xGVqOe5mmdsM9m35I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/MTIwLzA5MC9zbWFs/bC9haS1nZW5lcmF0/aXZlLWEtbWFuLW9u/LXNvbGlkLWNvbG9y/LWJhY2tncm91bmQt/d2l0aC1wb3V0LWZh/Y2UtZXhwcmVzc2lv/bi1waG90by5qcGc", nombre: "Sebastián León", account: "@SebasLeon", recomendacion: "El filete de pescado con arroz con coco es de otro nivel." }
    ];

  const firstRow = clients.slice(0, 10);
  const secondRow = clients.slice(10, 20);

  const CardComponent = ({ client }) => (
    <div className="w-72 flex flex-col bg-gray-100 border border-gray-300 rounded-lg px-1.5 py-1 flex-shrink-0 mr-8">
      <div className="flex items-center gap-3">
        <img className="w-14 h-14 rounded-full object-cover" src={client.img} alt={client.nombre} />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">{client.nombre}</h4>
          <h4 className="text-sm text-gray-600">{client.account}</h4>
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-2">{client.recomendacion}</p>
    </div>
  );

  return (
    <div className="w-full bg-white py-8 overflow-hidden clients">
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-20">
        <h2 className="titles text-4xl font-bold text-center mb-16">Testimonios de Clientes</h2>
        
        <div className="space-y-6">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-scroll">
              {[...firstRow, ...firstRow].map((client, index) => (
                <CardComponent key={`first-${index}`} client={client} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-scroll-reverse">
              {[...secondRow, ...secondRow].map((client, index) => (
                <CardComponent key={`second-${index}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Clients;