import React from "react";
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
export default function EmailSender() {
  return (
    <div id="email" className={aboshione.className}>
      <div className="h2">
        <h2>
          Posalji nam <span>Email</span>
        </h2>
      </div>
      <div className="ispod">
        <form action="">
          <div className="nedugme">
            <div className="ime">
              <div className="h3">
                <h3>Ime:</h3>
              </div>
              <input type="text" />
            </div>
            <div className="ime">
              <div className="h3">
                <h3>Naslov:</h3>
              </div>
              <input type="text" />
            </div>
            <div className="ime">
              <div className="h3">
                <h3>Prezme:</h3>
              </div>
              <input type="text" />
            </div>
            <div className="ime">
              <div className="h3">
                <h3>Text:</h3>
              </div>
              <textarea />
            </div>
          </div>

          <button type="submit" className={montserrat.className}>
            Pošalji
          </button>
        </form>
      </div>
    </div>
  );
}
