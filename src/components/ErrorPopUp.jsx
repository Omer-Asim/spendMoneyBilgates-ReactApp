import React from "react";
import { Modal, Button } from "antd";
const ErrorPopUp = ({
  visible,
  confirmLoading,
  modalText1,
  setConfirmLoading1,
  setModalText1,
  setVisible1,
  setTiklandimi,
}) => {
  const handleOk1 = () => {
    setConfirmLoading1(true);
    setTiklandimi(false);
    setTimeout(() => {
      setVisible1(false);
      setConfirmLoading1(false);
    }, 2000);
  };

  const handleCancel1 = () => {
    setVisible1(false);
  };
  return (
    <div>
      <Modal
        title="Hata"
        visible={visible}
        onOk={handleOk1}
        confirmLoading={confirmLoading}
        onCancel={handleCancel1}
        okText=""
        cancelText="Kapat"
      >
        <i className="fas fa-exclamation fa-8x d-flex justify-content-center text-danger"></i>
        <h2 className="text-center">Hata..</h2>
        <p className="text-center">Önce biraz harcama yapmaya ne dersin?</p>
      </Modal>
    </div>
  );
};

export default ErrorPopUp;
