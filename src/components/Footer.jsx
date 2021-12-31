import React from "react";
import { MainContext, useContext } from "../Context";
const Footer = ({ setTiklandimi, setVisible, setVisible1 }) => {
  const { setPara } = useContext(MainContext);

  function tikla() {
    setTiklandimi(true);
    setVisible(true);
    setVisible1(true);
    setPara(100000000000);
  }
  return (
    <React.StrictMode>
      <small onClick={tikla} className="harcama-bitir  ">
        Harcamayı Bitir
      </small>
      <div className="bg-light text-dark text-center h6">
        <a
          className="font-weight-bold"
          target="_blank"
          href="http://omerleyazilim.com"
        >
          omerleyazilim.com
        </a>
        <br />
        Tüm Hakları Saklıdır - © 2021
        <div></div>
      </div>
    </React.StrictMode>
  );
};

export default Footer;
