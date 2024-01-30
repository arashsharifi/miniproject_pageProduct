import React, { useContext, useState } from "react";

import "./Modal.css";
import { todoDta } from "../../layout/main";
import { DataContaxt } from "../../layout";

export function Modal({ setOpenModal, idModal }) {
  const [count, setCount] = useState(1);
  const { data, setData } = useContext(DataContaxt);
  // const findObj = todoDta.find((item) => item.id === idModal);

  // const ArrayObj = [];
  // ArrayObj.push(findObj);
  // const plse = [];
  // const Src = ArrayObj.map((item) => plse.push(item.pic));
  // const plse1 = [];
  // const name = ArrayObj.map((item) => plse1.push(item.title));
  // const getStrSrc = plse[0];
  // const getNameStr = plse1[0];

  function sendToData() {
    setOpenModal(false);
    const productData = {
      Quntity: count,
      title: idModal.title,
      pic: idModal.pic,
      price: idModal.price,
      id: Math.random().toString(),
    };

    setData([...data, productData]);
  }

  return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="body">
        <div className="cont">
          <div className="leftAside">
            <img className="img_modal" src={idModal.pic} alt="noot" />

            <p>
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
            </p>
            <p> 🚚 Free Shipping </p>
          </div>
          <div className="textContainer">
            <p className="sp">
              $<span>{idModal.price * count}</span>
            </p>
            <div className="txtCont">
              <p>
                <strong>Wax:</strong> Top grade Soy wax that delivers a smoke
                less, consistent burn
              </p>
              <p>
                <strong>Fragrance:</strong> Premium quality ingredients with
                natural essential oils
              </p>
              <p>
                <strong>Burning Time:</strong> 70-75 hours
              </p>
            </div>
            <div className="quantity">
              <p>Quantity</p>
              <div className="box">
                <button onClick={() => setCount(count + 1)}>+</button>
                <span>{count < 0 ? 0 : count}</span>
                <button onClick={() => setCount(count - 1)}>-</button>
              </div>
            </div>
            <div className="btn-container">
              <button onClick={sendToData}>
                <i className="bi bi-cart3"></i>+ Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
