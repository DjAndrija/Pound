"use client";
import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import { toast, ToastContainer } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
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
  const [ime, SetIme] = useState("");
  const [text, SetText] = useState("");
  const [email, SetEmail] = useState("");
  const [naslov, SetNaslov] = useState("");
  const [broj, SetBroj] = useState("");
  const [tip, SetTip] = useState("18 Rodjendan");
  const [date, SetDate] = useState("1-1-2024");
  const [emailValid, SetEmailValid] = useState("");
  const [naslovValid, SetNaslovValid] = useState("");
  const [imeValid, SetImeValid] = useState("");
  const [textValid, SetTextValid] = useState("");
  const [dateValid, SetDateValid] = useState("");

  var url: string;
  useEffect(() => {
    url = window.location.href;
  }, []);
  const fetchData = async (urll: string) => {
    try {
      const res = await axios.post(`${urll}api/contact`, {
        email,
        naslov,
        text,
        ime,
        broj,
        tip,
        date,
      });
      if (res.data.status === "success") {
        return toast("USPEH");
      } else {
        return console.log("fail");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button onClick={() => console.log(`${url}api/contact`)}>
        adasdadsadadasd
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div id="email" className={aboshione.className}>
        <div className="h2">
          <h2>
            Posalji nam <span>Email</span>
          </h2>
        </div>
        <div className="ispod">
          <form action="/api/contact" method="POST">
            <div className="nedugme">
              <div className="ime">
                <div className="h3">
                  <h3>Ime i Prezime:</h3>
                </div>
                <input
                  name="ime"
                  type="text"
                  className={montserrat.className}
                  placeholder="Petar"
                  onChange={(e) => {
                    return input(e, SetIme);
                  }}
                />
                <p>{imeValid}</p>
              </div>
              <div className="ime">
                <div className="h3">
                  <h3>Naslov:</h3>
                </div>
                <input
                  name="naslov"
                  type="text"
                  className={montserrat.className}
                  placeholder="Iznajmljjivanje kluba"
                  onChange={(e) => {
                    return input(e, SetNaslov);
                  }}
                />
                <p>{naslovValid}</p>
              </div>
              <div className="ime">
                <div className="h3">
                  <h3>Email:</h3>
                </div>
                <input
                  name="email"
                  type="text"
                  className={montserrat.className}
                  placeholder="petar.petrovic@gmail.com"
                  onChange={(e) => {
                    return input(e, SetEmail);
                  }}
                />
                <p>{emailValid}</p>
              </div>

              <div className="ime">
                <div className="h3">
                  <h3>Datum:</h3>
                </div>
                <input
                  name="datum"
                  type="date"
                  placeholder="2024-01-01"
                  className={montserrat.className}
                  onChange={(e) => {
                    console.log(e.target.value);
                    return input(e, SetDate);
                  }}
                />
                <p>{dateValid}</p>
              </div>
              <div className="ime">
                <div className="h3">
                  <h3>Tip proslave:</h3>
                </div>
                <select
                  name="proslava"
                  className={montserrat.className}
                  onChange={(e) => {
                    return select(e, SetTip);
                  }}
                >
                  {" "}
                  <option>18 Rodjendan</option>
                  <option>Proslava Godisnjice</option>
                  <option>Rodjenje deteta</option>
                  <option>Korporativni Dogadjaj</option>
                </select>
              </div>
              <div className="ime">
                <div className="h3">
                  <h3>Text:</h3>
                </div>
                <textarea
                  className={montserrat.className}
                  placeholder="Dobar dan,želeo bih da ..."
                  onChange={(e) => {
                    return textArea(e, SetText);
                  }}
                  name="text"
                />
                <p>{textValid}</p>
              </div>
              <div className="ime brojg ">
                <div className="h3">
                  <h3>Broj gostiju:</h3>
                </div>
                <input
                  name="gosti"
                  type="number"
                  min={1}
                  max={60}
                  className={montserrat.className}
                  onChange={(e) => {
                    return input(e, SetBroj);
                  }}
                />
              </div>
            </div>
          </form>

          <button
            className={montserrat.className}
            onClick={(e) => {
              if (typeof broj !== "number") {
                e.preventDefault();
              }
              if (!validator.isDate(date)) {
                e.preventDefault();
                SetDateValid("Molimo Vas unesite datum");
              } else {
                SetDateValid("");
              }
              if (!validator.isEmail(email)) {
                e.preventDefault();
                SetEmailValid("Unesite pravilan imejl");
              } else {
                SetEmailValid("");
              }
              if (
                !validator.isLength(naslov, {
                  min: 1,
                })
              ) {
                e.preventDefault();
                SetNaslovValid("Unesite naslov");
              } else {
                SetNaslovValid("");
              }
              if (
                !validator.isLength(ime, {
                  min: 1,
                })
              ) {
                e.preventDefault();
                SetImeValid("Unesite Ime");
              } else {
                SetImeValid("");
              }
              if (
                !validator.isLength(text, {
                  min: 1,
                })
              ) {
                e.preventDefault();
                SetTextValid("Unesite text");
              } else {
                SetTextValid("");
              }
              if (
                validator.isEmail(email) &&
                validator.isLength(naslov, {
                  min: 1,
                }) &&
                validator.isLength(text, {
                  min: 1,
                }) &&
                validator.isLength(ime, {
                  min: 1,
                })
              )
                fetchData(url);
            }}
          >
            Pošalji
          </button>
        </div>
      </div>
    </>
  );
}

function input(
  e: React.ChangeEvent<HTMLInputElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
function select(
  e: React.ChangeEvent<HTMLSelectElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
function textArea(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
