import React from 'react';

const MarqueeCards = () => {
  // Datos de ejemplo para 20 clientes
  const clients = [
    { nombre: "Ana García", account: "@ana_garcia", recomendacion: "Excelente servicio y atención personalizada. Muy recomendado para proyectos web.", img: "https://images.unsplash.com/photo-1494790108755-2616b512c77c?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Carlos López", account: "@carlos_dev", recomendacion: "Trabajo profesional y entrega a tiempo. Superó mis expectativas.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { nombre: "María Rodríguez", account: "@maria_design", recomendacion: "Creatividad y calidad en cada detalle. Muy satisfecha con el resultado.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Juan Pérez", account: "@juan_tech", recomendacion: "Comunicación fluida y soluciones innovadoras. Totalmente recomendado.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Laura Martín", account: "@laura_ux", recomendacion: "Atención al detalle excepcional. El proyecto quedó perfecto.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Diego Silva", account: "@diego_web", recomendacion: "Muy profesional y eficiente. Trabajo de alta calidad.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Carmen Ruiz", account: "@carmen_brand", recomendacion: "Excelente experiencia trabajando juntos. Muy recomendado.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Roberto Díaz", account: "@roberto_code", recomendacion: "Resultados increíbles y atención personalizada. Cinco estrellas.", img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Patricia Luna", account: "@patricia_ui", recomendacion: "Trabajo impecable y comunicación excelente durante todo el proceso.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Andrés Vega", account: "@andres_full", recomendacion: "Superó todas mis expectativas. Definitivamente lo contrataré nuevamente.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Isabel Torres", account: "@isabel_dev", recomendacion: "Profesional, creativo y muy atento a los detalles. Excelente trabajo.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Miguel Herrera", account: "@miguel_web", recomendacion: "Calidad excepcional y entrega puntual. Muy satisfecho con el resultado.", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Sofía Morales", account: "@sofia_ux", recomendacion: "Trabajo de primera calidad. Comunicación clara y eficiente.", img: "https://images.unsplash.com/photo-1494790108755-2616b512c77c?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Fernando Castro", account: "@fernando_js", recomendacion: "Excelente experiencia. Recomiendo ampliamente sus servicios.", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Valentina Soto", account: "@vale_design", recomendacion: "Creatividad y profesionalismo en cada proyecto. Muy recomendado.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Alejandro Ramos", account: "@alex_dev", recomendacion: "Trabajo excepcional y atención personalizada. Cinco estrellas.", img: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Camila Jiménez", account: "@cami_ui", recomendacion: "Resultados impresionantes. Definitivamente lo recomiendo.", img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Ricardo Mendoza", account: "@ricardo_tech", recomendacion: "Profesional y eficiente. Trabajo de muy alta calidad.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Natalia Vargas", account: "@natalia_web", recomendacion: "Excelente comunicación y resultados sobresalientes.", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face" },
    { nombre: "Gabriel Ortega", account: "@gabriel_code", recomendacion: "Trabajo impecable y entrega a tiempo. Muy satisfecho.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" }
  ];

  // Dividir clientes en dos filas
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
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios de Clientes</h2>
        
        <div className="space-y-6">
          {/* Primera fila */}
          <div className="relative">
            {/* Gradientes */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Animación */}
            <div className="flex animate-scroll">
              {/* Duplicamos el contenido */}
              {[...firstRow, ...firstRow].map((client, index) => (
                <CardComponent key={`first-${index}`} client={client} />
              ))}
            </div>
          </div>

          {/* Segunda fila */}
          <div className="relative">
            {/* Gradientes */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Animación reversa */}
            <div className="flex animate-scroll-reverse">
              {/* Duplicamos el contenido */}
              {[...secondRow, ...secondRow].map((client, index) => (
                <CardComponent key={`second-${index}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS personalizado */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * 10)); }
        }

        @keyframes scroll-reverse {
          0% { transform: translateX(calc(-320px * 10)); }
          100% { transform: translateX(0); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueeCards;