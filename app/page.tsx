import Image from "next/image";
import Onama from "./components/Onama";
import Pocetna from "./components/Pocetna";
import Usluge from "./components/Usluge";
import Cena from "./components/Cena";
import Kontakt from "./components/Kontakt";
export default function Home() {
  return (
    <main>
      <Pocetna />
      <Onama />
      <Usluge />
      <Cena />
      <Kontakt />
    </main>
  );
}
