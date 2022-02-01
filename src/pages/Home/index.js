import React from "react";
import { Link } from "react-router-dom";
import { ContrainerPage, TitlePage } from "../../Components/Main";
import { AreaCard } from "./styled";
import { ReactComponent as Gear } from "../../assets/icons/settings.svg";
import { ReactComponent as Carrinho } from "../../assets/icons/carrinho-3.svg";
import { ReactComponent as Users } from "../../assets/icons/users.svg";
import { ReactComponent as Form } from "../../assets/icons/folder.svg";
import { ReactComponent as Api } from "../../assets/icons/api_white.svg";
import { ReactComponent as Produto } from "../../assets/icons/feed_white.svg";

const itens = [
  {
    nome: "Orçamento",
    icone: <Form className="icone" />,
    link: "/orcamento-produtos",
  },
  {
    nome: "Cadastro de Cliente",
    icone: <Users className="icone" />,
    link: "/cadastro-cliente",
  },
  {
    nome: "Pedido de Vendas",
    icone: <Carrinho className="icone" />,
    link: "/pedidos-vendas",
  },
  {
    nome: "Integrações",
    icone: <Api className="icone" />,
    link: "/integracoes",
  },
  {
    nome: "Produto",
    icone: <Produto className="icone" />,
    link: "/produto",
  },
  { 
    nome: "Configurações", 
    icone: <Gear className="icone" />, 
    link: "/config" 
  },
];

const Page = () => {
  return (
    <ContrainerPage>
      <TitlePage>Seja Bem Vindo!</TitlePage>
      <Cards lista={itens} />
    </ContrainerPage>
  );
};

function Cards({ lista }) {
  return (
    <>
      <AreaCard>
        {lista.map((lista, index) => {
          return (
            <li className="card" key={index}>
              <Link className="link" to={lista.link}>
                <span className="icon">{lista.icone}</span>
                <span className="title">{lista.nome}</span>
              </Link>
            </li>
          );
        })}
      </AreaCard>
    </>
  );
}

export default Page;
