import React from 'react'
import bank_logo from "../../assets/images/bank_logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="image-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secondary" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primary" href="https://google.com">
          Sair
        </a>
      </div>
    </div>
  )
}
