"use client";
import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "next/font/google";
import { toast, ToastContainer } from "react-toastify";
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
  const [emailValid, SetEmailValid] = useState("");
  const [naslovValid, SetNaslovValid] = useState("");
  const [imeValid, SetImeValid] = useState("");
  const [textValid, SetTextValid] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/contact", {
        email,
        naslov,
        text,
        ime,
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
            </div>
          </form>

          <button
            className={montserrat.className}
            onClick={(e) => {
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
                fetchData();
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
function textArea(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
