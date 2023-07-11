import React, { useState } from 'react';

import privates from "../../assets/images/privado.svg";
import eye_icon from "../../assets/images/olho.svg";
import money from "../../assets/images/dinheiro.svg";

export default function Account() {
  const [toggleState, untoggle] = useState(true);
  
  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  
  return (
    <div className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <img className="image-icon" src={money} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={() => toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="image-icon"
          src={toggleState ? privates : eye_icon}
          alt="Privacidade do Saldo"
        />
      </button>
    </div>
  )
}
