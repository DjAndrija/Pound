import Navbar from "@/app/components/Navbar";
import { Aoboshi_One, Montserrat } from "@next/font/google";
import Link from "next/link";
import React from "react";
import "../../../public/css/dodatne-usluge.css";
const aoboshione = Aoboshi_One({
  weight: ["400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export default function page() {
  return (
    <div className={`${aoboshione.className} dusluge`}>
      <Navbar ok="ne" />
      <div className="container decor">
        <h1>Dekoracija</h1>
        <p>
          U koliko želite najbolju dekoraciju došli ste na pravo mesto. Naš tim
          će se pobrinut da mesto bude uredjeno baš onako kako Vama odgovara, i
          osigurati Vam najbolji mogući ambijent.
        </p>
        {/* <ul>
          <li>Piletina</li>
          <li>Rolovano belo</li>
          <li>Kiflice sa sirom</li>
          <li>Cevapi</li>
          <li>Veganske Kiflice</li>
        </ul> */}
        <div className="a">
          <Link href="https://wa.me/38164650475" className="aoboshione">
            Pozovi
          </Link>
        </div>
      </div>
    </div>
  );
}
