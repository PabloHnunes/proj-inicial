import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-js.png";
import { ReactComponent as Gear } from "../../assets/icons/settings.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Users } from "../../assets/icons/users.svg";

import { AreaHeader, AreaLista } from "./styled";

const itens = [
  { check: false, nome: "Home", icone: <Home className="icone" />, link: "/home"},
  { check: false, nome: "Usuários", icone: <Users className="icone" />, link: "/users" },
  { check: false, nome: "Configurações", icone: <Gear className="icone" />, link: "/config" },
];


function Header() {
  return (
    <>
      <AreaHeader>
        <div className="container">
          <div className="logo">
            <img src={Logo}></img>
          </div>
          <div className="navigation">
            <Lista lista={itens} />
          </div>
        </div>
      </AreaHeader>
    </>
  );
}

function Lista({lista}) {
  return (
    <>
      <AreaLista>
        {lista.map((lista, index) => {
          return (
            <li className="lista" id={window.location.pathname == lista.link ? "active" : ""} onClick={() => {
                window.location.pathname = lista.link
                console.log(window.location.pathname);
                }} key={index}>
              <Link className="link" to={lista.link}>
                <span className="icon">{lista.icone}</span>
                <span className="title">{lista.nome}</span>
              </Link>
            </li>
          );
        })}
      </AreaLista>
    </>
  );
}

export default Header;
