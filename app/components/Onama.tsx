import React from "react";
import { Aoboshi_One, Nunito, Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const aboshione = Aoboshi_One({
  weight: ["400"],
  subsets: ["latin"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export default function Onama() {
  return (
    <div id="o-nama-poc" className={aboshione.className}>
      <h1>Najuzbudljiviji provod u Srbiji</h1>
      <div className="ispod">
        <div className="p">
          <p className={montserrat.className}>
            Dobrodošli u klub Pound - najidealnije mesto za organizaciju Vašeg
            događaja! Klub Pound savršen je za sve vrste posebnih prilika i
            zabava. Bilo da planirate korporativno okupljanje, rođendansku
            proslavu ili neki drugi važan događaj, naš klub pruža neverovatnu
            atmosferu i fleksibilnost da se prilagodi Vašim potrebama.
          </p>
        </div>
        <div className="img">
          <div className="thecard">
            <img className="frontface" src="/pocetna2.jpeg"></img>
            <div className="backface">
              <div className="dugme">
                <Link href="/slike" className={`link ${montserrat.className}`}>
                  Pogledaj Još Slika
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
