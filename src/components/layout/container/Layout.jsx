import { createContext, useState } from "react";
import { Modal } from "../../widget";
import { Article } from "../article";
import { Footer } from "../footer";
import { Main } from "../main";
import { Navv } from "../nav";
import { todoDta } from "../main";
import style from "./Layout.module.css";

export const DataContaxt = createContext();

export const findId = [];
export function Layout() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [idModal, setIdModal] = useState(findId);
  function hanlderIdOpenModal(product) {
    setIdModal(product);

    setOpenModal(true);
  }
  return (
    <DataContaxt.Provider value={{ data, setData }}>
      <div>
        <div className={style.container}>
          <Navv />
          <Article />
          <Main
            setOpenModal={setOpenModal}
            hanlderIdOpenModal={hanlderIdOpenModal}
          />
          <Footer />
          {openModal && <Modal setOpenModal={setOpenModal} idModal={idModal} />}
        </div>
      </div>
    </DataContaxt.Provider>
  );
}
