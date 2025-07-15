import Footer from "./Footer";
import HeaderReservation from "./HeaderReservation";

export default function ContainerReservation() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <HeaderReservation />
        <main className="flex-grow">
        </main>
        <Footer />
      </div>
    </>

  );
}