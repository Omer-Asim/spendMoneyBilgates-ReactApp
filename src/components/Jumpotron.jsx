import React from "react";
import { moneyFormat } from "../helpers";

const Jumpotron = ({ para, setBaslandimi, baslandimi }) => {
  return (
    <React.StrictMode>
      <div className="jumbotron-one container"></div>

      <div
        className="alert alert-dark jumbotronyazi sticky-top container d-flex justify-content-center my-3"
        role="alert"
      >
        <div className="d-flex align-items-center">
          {para > 0 ? (
            <div className="">
              <strong className="text-success">$</strong>
              {moneyFormat(para)}
            </div>
          ) : (
            <div className="mx-auto text-danger">
              Üzgünüz ama.. <br />
              Paranız ne yazık ki yeterli değil.
            </div>
          )}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Jumpotron;
