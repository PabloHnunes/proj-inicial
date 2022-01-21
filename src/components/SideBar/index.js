import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Gear } from "../../assets/icons/settings.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Users } from "../../assets/icons/users.svg";
import { ReactComponent as Form } from "../../assets/icons/folder.svg";

import { AreaHeader, AreaLista } from "./styled";
import Routes from '../../Routers';

const itens = [
  { check: false, nome: "Home", icone: <Home className="icone" />, link: "/"},
  { check: false, nome: "Usuários", icone: <Users className="icone" />, link: "/users" },
  { check: false, nome: "Configurações", icone: <Gear className="icone" />, link: "/config" },
  { check: false, nome: "Painel de Orçamento", icone: <Form className="icone"/>, link: "/orcamento-produtos"}
];


function SideBar() {
  return (
    <>
      <AreaHeader>
        <div className="navigation">
            <Lista lista={itens} />
        </div>
        <div>
          <Routes/>
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
            <li className="lista" id={window.location.pathname === lista.link ? "active" : ""} onClick={() => {
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

export default SideBar;
