import Image from "next/image";
import Onama from "./components/Onama";
import Pocetna from "./components/Pocetna";
import Usluge from "./components/Usluge";
import Cena from "./components/Cena";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar ok={"da"} />
      <Pocetna />
      <Onama />
      <Usluge />
      <Cena />
      <Kontakt />
    </main>
  );
}
