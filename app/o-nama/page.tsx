import React from "react";
import Navbar from "../components/Navbar";
import Onama from "../components/Onama";
import Slike from "./components/Slike";

export default function page() {
  return (
    <div id="o-nama">
      <Navbar ok="ne" />
      <Onama />
      <Slike />
    </div>
  );
}
