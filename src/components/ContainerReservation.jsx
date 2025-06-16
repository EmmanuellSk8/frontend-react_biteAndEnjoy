// import Footer from "./Footer";
// import HeaderReservation from "./HeaderReservation";

// export default function ContainerReservation() {


//     return(

//         <>

//         <div className="flex flex-col min-h-screen">
//         <HeaderReservation/>   
//         <main className="grow"> </main>
//         <Footer/>     
//         </div>
//         </>
//     )
// }
import Footer from "./Footer";
import HeaderReservation from "./HeaderReservation";

export default function ContainerReservation() {
  return (
    <>
  <div className="flex flex-col min-h-screen">
  <HeaderReservation />
    <main className="flex-grow">
      {/* contenido */}
    </main>
    <Footer />
  </div>
</>

  );
}
