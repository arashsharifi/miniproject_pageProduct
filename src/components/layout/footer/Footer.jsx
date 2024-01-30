import React from "react";
import style from "./FooterBase.module.css";
import darkPic from "../../../image/dark.svg";
export function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.helpSection}>
          <div className={style.cont}>
            <div className={style.LogoAside}>
              <div className={style.plasLogo}>
                <div className={style.imgCont}>
                  <img className={style.img} src={darkPic} alt="nooot" />
                  <div className={style.su}></div>
                </div>
                <h3>Candleaf</h3>
              </div>
              <p>
                Your natural candle made for your home and for your wellness.
              </p>
            </div>
            <div className={style.links}>
              <div className={style.linkCont}>
                <p>Disconwery</p>
                <p>New Section</p>
                <p>Most Searched</p>
                <p>Most selled</p>
              </div>
              <div className={style.linkCont}>
                <p>Disconwery</p>
                <p>New Section</p>
                <p>Most Searched</p>
                <p>Most selled</p>
              </div>
              <div className={style.linkCont}>
                <p>Disconwery</p>
                <p>New Section</p>
                <p>Most Searched</p>
                <p>Most selled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
