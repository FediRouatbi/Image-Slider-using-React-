import React, { useState } from "react";
import "./App.css";

export default function App() {
  const pics = document.querySelectorAll("img");
  const dots = document.querySelectorAll(".dot");
  const [current, setCurrent] = useState(0);
  const imgs = new Array(6)
    .fill(0)
    .map((_, i) => (
      <img
        style={{ transform: `translate(${130 * (i - current) - 50}%,-50%)` }}
        src={require(`./image${i + 1}.jpg`)}
        alt={"slider"}
      />
    ));
  const dot = new Array(6)
    .fill(0)
    .map((_, i) => (
      <div
        className={`dot ${i === 0 ? "dot_active" : ""}`}
        key={i}
        id={i}
      ></div>
    ));

  const changeView = (e) => {
    e.currentTarget.id === "right"
      ? setCurrent((prev) => (prev === 5 ? 0 : prev + 1))
      : setCurrent((prev) => (prev === 0 ? 5 : prev - 1));
  };
  const changeDot = (e) => {
    if (e.target === e.currentTarget) return;
    setCurrent(+e.target.id);
  };

  const ColorDot = (num) => {
    dots.forEach((dot) =>
      +dot.id === num
        ? dot.classList.add("dot_active")
        : dot.classList.remove("dot_active")
    );
  };
  const changeSlide = (num) => {
    pics.forEach(
      (elem, i) =>
        (elem.style.transform = `translate(${130 * (i - num) - 50}%,-50%)`)
    );
  };

  changeSlide(current);
  ColorDot(current);

  return (
    <div className="container">
      {imgs}
      <div className="dots" onClick={changeDot}>
        {dot}
      </div>
      <button className="btn-right btn" id="right" onClick={changeView}>
        <i id="icon1" className="fa-solid fa-angles-right"></i>
      </button>
      <button className="btn-left btn" id="left" onClick={changeView}>
        <i id="icon2" className="fa-solid fa-angles-left"></i>
      </button>
    </div>
  );
}
