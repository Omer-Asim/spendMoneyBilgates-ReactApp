import React, { useState } from "react";
import { moneyFormat } from "../helpers";
import Alert from "./Alert";

const Cards = ({ para, sepet, setSepet, data, setPara }) => {
  const sepetAmount = sepet.find((item) => item.id === data.id);

  async function sepeteekle(e) {
    if (para > 0) {
      setPara(para - data.fiyat);
    }

    const check = sepet.find((item) => item.id === data.id);
    //ürün daha önce eklenmişse
    if (check) {
      check.amount += 1;

      setSepet([...sepet.filter((item) => item.id !== data.id), check]);
    } else {
      setSepet([
        ...sepet,
        {
          id: data.id,
          amount: 1,
          fiyat: data.fiyat,
          baslik: data.baslik,
        },
      ]);
    }
  }
  function amaountAzalt() {
    const varmi = sepet.find((item) => item.id === data.id);
    if (varmi && varmi.amount > 0) {
      varmi.amount -= 1;
      setSepet([...sepet.filter((item) => item.id !== data.id), varmi]);
    }
    if (para < 100000000000) {
      setPara(para + data.fiyat);
    }
  }
  return (
    <React.StrictMode>
      <div className="col-sm-6 col-md-6 col-lg-3 col-6 pb-4 p-1">
        <div className="">
          <div className="card-group hover-deneme-card ">
            <div className="card">
              <img
                className=""
                src={data.resim}
                style={{ width: "100%", height: "260px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">{data.baslik}</h5>
                <p className="card-text text-center">
                  ${moneyFormat(data.fiyat)}
                </p>
                <div className=" btn w-100 card-buton bg-transparent d-flex justify-content-center align-items-center">
                  {sepetAmount && sepetAmount.amount ? (
                    <>
                      <button
                        className={`btn  card-renk ${
                          sepetAmount.amount < 1 && "d-none"
                        }`}
                        onClick={amaountAzalt}
                      >
                        {" "}
                        -
                      </button>

                      <span className="mx-2 p-2">
                        <strong>{sepetAmount.amount}</strong>
                      </span>
                      <button
                        className=" btn card-renk"
                        onClick={sepeteekle}
                        disabled={para < data.fiyat}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <div onClick={sepeteekle} className="btn card-renk">
                      SATIN AL
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Cards;
