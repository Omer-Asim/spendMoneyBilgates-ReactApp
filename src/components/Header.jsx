import React from "react";

const Header = ({ para, setPara, setSepet }) => {
  function reset() {
    //STATELER SIFIRLADIM!!!
    setPara(100000000000);
    setSepet([]);
  }
  return (
    <div className="container-fluid bg-light ">
      <strong className="d-flex justify-content-center py-3">
        <span style={{ color: "#08d026" }}>#</span> Bill Gates'in Parasını
        Bitirebilirmisin !
      </strong>
    </div>
  );
};

export default Header;
