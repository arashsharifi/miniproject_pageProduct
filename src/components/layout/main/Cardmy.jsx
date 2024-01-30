import React, { useState } from "react";
import style from "./Cardmy.module.css";
import pic1 from "../../../image/1.png";
export function Cardmy({ product, handlerToDlete }) {
  const Qun = product.Quntity;

  const [counti, secCounti] = useState(Qun);
  return (
    <div className={style.container}>
      <div>
        <img className={style.imgInfo} src={product.pic} alt="noot" />
      </div>
      <div className={style.textcontainer}>
        <h1>{product.title}</h1>
        <div className={style.totalPrice}>
          <p>
            $ <span>{product.price}</span>
          </p>
          <div className={style.count}>
            <button onClick={() => secCounti(counti + 1)}>+</button>
            <span>{counti < 0 ? 0 : counti}</span>
            <button onClick={() => secCounti(counti - 1)}>-</button>
          </div>
          <p>
            Total <span>$</span>
            <span>{product.price * counti}</span>
          </p>
        </div>
        <p onClick={() => handlerToDlete(product.id)} className={style.removeB}>
          remove
        </p>
      </div>
    </div>
  );
}
