import React, { useState } from "react";
import Footer from "./Footer";
import { moneyFormat } from "../helpers";
import { Modal, Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import SuccessPopUp from "./SuccessPopUp";
import ErrorPopUp from "./ErrorPopUp";

const Alert = ({ sepet }) => {
  var genel = [];
  var genelToplam = 0;
  var sayi = Number(100000000000);

  const [tiklandimi, setTiklandimi] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const showModal = () => {
    setVisible(true);
  };

  const [visible1, setVisible1] = React.useState(false);
  const [confirmLoading1, setConfirmLoading1] = React.useState(false);
  const [modalText1, setModalText1] = React.useState("asdasd");
  const showModal1 = () => {
    setVisible1(true);
  };
  return (
    <React.StrictMode>
      <div className={`${sepet.length > 0 ? `d-flex` : `d-none`}`}>
        <table class="table container bg-white  ">
          <thead>
            <tr>
              <th scope="col">Ürün</th>
              <th scope="col">Adet</th>
              <th scope="col">Birim Fiyat</th>
              <th scope="col">Toplam Fiyat</th>
            </tr>
          </thead>
          {sepet.map((data) => {
            var toplam = data.amount * data.fiyat;
            genel.push(toplam);
            if (data.amount > 0) {
              return (
                <React.StrictMode>
                  <tbody>
                    <tr>
                      <td>{data.baslik} </td>
                      <td>{data.amount} </td>
                      <td>${moneyFormat(data.fiyat)}</td>
                      <td>${moneyFormat(toplam)}</td>
                    </tr>
                  </tbody>
                </React.StrictMode>
              );
            }
          })}

          {genel.map((data) => {
            genelToplam += Number(data);
          })}

          {genelToplam > 0 && (
            <tr class="">
              <td></td>
              <td class="Rate"></td>
              <td>
                <h5>Toplam</h5>
              </td>
              <td class="fatura-son-toplam">
                {" "}
                <strong>{`$ ${moneyFormat(genelToplam)}`}</strong>
              </td>
            </tr>
          )}
        </table>
      </div>

      {tiklandimi && genelToplam > 0 ? (
        <SuccessPopUp
          visible={visible}
          confirmLoading={confirmLoading}
          modalText={modalText}
          setConfirmLoading={setConfirmLoading}
          setModalText={setModalText}
          setVisible={setVisible}
          genelToplam={genelToplam}
          setTiklandimi={setTiklandimi}
          sayi={sayi}
          sepet={sepet}
          genel={genel}
        />
      ) : tiklandimi && genelToplam === 0 ? (
        <ErrorPopUp
          setTiklandimi={setTiklandimi}
          visible={visible1}
          confirmLoading={confirmLoading1}
          modalText1={modalText1}
          setConfirmLoading1={setConfirmLoading1}
          setModalText={setModalText1}
          setVisible1={setVisible1}
        />
      ) : null}

      <Footer
        setTiklandimi={setTiklandimi}
        tiklandimi={tiklandimi}
        setVisible={setVisible}
        setVisible1={setVisible1}
      />
    </React.StrictMode>
  );
};

export default Alert;
