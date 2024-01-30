import React, { useContext, useReducer, useState } from "react";
import style from "./Main.module.css";
import { DataContaxt } from "../container";

import pic1 from "../../../image/1.png";
import pic2 from "../../../image/2.png";
import pic3 from "../../../image/3.png";
import pic4 from "../../../image/4.png";
import pic5 from "../../../image/5.png";
import pic6 from "../../../image/6.png";
import pic7 from "../../../image/7.png";
import pic8 from "../../../image/8.png";

import { Cardmy } from "./Cardmy";

export const todoDta = [
  { id: 1, title: "Spiced Mint", pic: pic1, price: 9.99 },
  { id: 2, title: "Sweet StraweBerry", pic: pic2, price: 9.99 },
  { id: 3, title: "Product name", pic: pic3, price: 9.99 },
  { id: 4, title: "Fragrant Cinnaman", pic: pic4, price: 9.99 },
  { id: 5, title: "Cool Blueberries", pic: pic5, price: 9.99 },
  { id: 6, title: "Summer Cherries", pic: pic6, price: 9.99 },
  { id: 7, title: "Juicy Lemon", pic: pic7, price: 9.99 },
  { id: 8, title: "Clean Lavander", pic: pic8, price: 9.99 },
];

function myCradReduser(stade, action) {
  switch (action.type) {
    case "DELETE_TASK":
      stade.filter((c) => c.id !== action.payload);

    default:
      return stade;
  }
}

export function Main({ hanlderIdOpenModal }) {
  const { data, setData } = useContext(DataContaxt);
  console.log(data);
  const [stade, dispatch] = useReducer(myCradReduser, data);

  function handlerToDlete(id) {
    console.log(id);
    dispatch({ type: "DELETE_TASK", payload: id });
    // setData((prevCard) => prevCard.filter((c) => c.id !== id));
  }

  console.log(data);
  return (
    <div className={style.container}>
      <div className={style.productSide}>
        <h1>Product</h1>
        <div className={style.products}>
          {todoDta.map((item) => (
            <div
              onClick={() => hanlderIdOpenModal(item)}
              key={item.id}
              className={style.Cart}
            >
              <div className={style.img}>
                <img className={style.imgCon} src={item.pic} alt="nooot" />
              </div>
              <div className={style.cont}>
                <p>{item.title}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.cartItemsSide}>
        <h2>Cart Items</h2>
        {data.map((item) => (
          <Cardmy
            key={item.id}
            product={item}
            handlerToDlete={handlerToDlete}
          />
        ))}
        <div className={style.btnCheck}>
          <p>
            subTota:$<span>200.00</span>
          </p>
          <button className={style.btnCh}>Check-out</button>
        </div>
      </div>
    </div>
  );
}

//  {/* {todo.map((item) => (
//       <div key={item.id}>
//         <img src={item.pic} alt="nooot" />
//         <p>{item.title}</p>
//       </div>
//     ))} */}
