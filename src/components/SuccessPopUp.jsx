import React from "react";
import { Modal, Button } from "antd";
import { moneyFormat } from "../helpers";
import { MainContext, useContext } from "../Context";
const SuccessPopUp = ({
  visible,
  confirmLoading,
  modalText,
  setConfirmLoading,
  setModalText,
  setVisible,
  genelToplam,
  sayi,
  sepet,
  genel,
  setTiklandimi,
}) => {
  const { setSepet } = useContext(MainContext);

  const handleOk = () => {
    setModalText("2 Saniye sonra kapanıcam");
    setConfirmLoading(true);
    setTiklandimi(false);
    setSepet([]);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setTiklandimi(false);
    setSepet([]);
  };
  return (
    <div>
      <Modal
        title="Tebrikler"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Sonucu Kaydet ve Paylaş"
        cancelText="Kapat"
      >
        <p>
          100 Milyar Dolardan <strong>{genelToplam} $</strong> harcandı.
        </p>
        <p>
          Geriye <strong>{sayi - genelToplam} $</strong> kaldı.
        </p>
        <div className="container p-0">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ürün</th>
                <th scope="col">Adet</th>
                <th scope="col">Birim Fiyat</th>
                <th scope="">Toplam Fiyat</th>
              </tr>
            </thead>
            <tbody>
              {sepet.map((data, i) => {
                var toplam = data.amount * data.fiyat;
                genel.push(toplam);
                if (data.amount > 0) {
                  return (
                    <React.StrictMode>
                      <tr className="font-height">
                        <th scope="row">{i + 1}</th>
                        <td>{data.baslik} </td>
                        <td>{data.amount} </td>
                        <td>${moneyFormat(data.fiyat)}</td>
                        <td>${moneyFormat(toplam)}</td>
                      </tr>
                    </React.StrictMode>
                  );
                }
              })}
              <tr class="">
                <td class="Rate"></td>
                <td class="Rate"></td>
                <td class="Rate"></td>
                <td>
                  <h5 className="">Toplam</h5>
                </td>
                <td class="fatura-son-toplam">
                  {" "}
                  <strong>{`$ ${moneyFormat(genelToplam)}`}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>Harcamanızı başarıyla tamamladınız.</p>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessPopUp;
