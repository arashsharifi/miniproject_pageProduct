import React from "react";

import style from "./Nav.module.css";

import { DropDownn } from "./DropDown";

import svg from "../../../image/leaf.svg";
export function Navv() {
  return (
    <div className={style.container}>
      <div className={style.navItem}>
        <div className={style.img}>
          <img src={svg} alt="nooot" />

          <div className={style.cu}></div>
        </div>
        <p>Candleaf</p>
      </div>
      <div className={style.navItem}>
        <a>aboute</a>
        <a>contact us</a>
        <DropDownn />
      </div>

      <div className={style.navItem}>
        <i className="bi bi-person"></i>
        <i className="bi bi-cart"></i>
      </div>
    </div>
  );
}
