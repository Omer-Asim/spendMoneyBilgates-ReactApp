import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import Jumpotron from "./Jumpotron";
import products from "./products.json";
import { MainContext } from "../Context";

const Homepage = () => {
  const [para, setPara] = useState(100000000000);
  const [sepet, setSepet] = useState([]);
  const [toplam, setToplam] = useState(0);
  const [baslandimi, setBaslandimi] = useState(false);
  useEffect(() => {
    setToplam(
      sepet.reduce((acc, item) => {
        return (
          acc +
          item.amount *
            products.find((product) => (product.id === item.id).fiyat)
        );
      }, 0)
    );
  }, [sepet]);
  let degerler = {
    setPara,
    para,
    setSepet,
    sepet,
  };
  return (
    <MainContext.Provider value={degerler}>
      <React.StrictMode>
        <Header setPara={setPara} setSepet={setSepet} />
        <Jumpotron
          para={para}
          setBaslandimi={setBaslandimi}
          baslandimi={baslandimi}
        />

        <div className="container ">
          <div className="row">
            {products.map(function (data) {
              return (
                <Cards
                  key={products.id}
                  products={products}
                  para={para}
                  sepet={sepet}
                  setSepet={setSepet}
                  data={data}
                  setPara={setPara}
                  toplam={toplam}
                />
              );
            })}
          </div>
        </div>

        <Alert sepet={sepet} />
      </React.StrictMode>
    </MainContext.Provider>
  );
};

export default Homepage;
