import React from "react";
import EmailSender from "./EmailSender";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
const cairo = Cairo({
  weight: ["400"],
  subsets: ["latin"],
});
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
export default function Kontakt() {
  return (
    <div id="kontakt-poc" className={aboshione.className}>
      <div className="h1">
        <h1>Kontakt</h1>
      </div>
      <div className={`p ${montserrat.className}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          delectus numquam molestiae atque error dolorum exercitationem, omnis
          ratione necessitatibus sapiente sint minus praesentium aliquam
          nesciunt eaque quia voluptatum corrupti cum at reiciendis neque optio
          quibusdam magnam laborum. Soluta corrupti odio hic veniam impedit
          quibusdam velit quia eius aliquam. Modi, asperiores?
        </p>
      </div>
      <EmailSender />
    </div>
  );
}
