import React from "react";
import { Link } from "react-router-dom";
import { AreaCard, AreaChars, ContainerHome } from "./styled";
import { ReactComponent as Gear } from "../../assets/icons/settings.svg";
import { ReactComponent as Carrinho } from "../../assets/icons/carrinho-3.svg";
import { ReactComponent as Users } from "../../assets/icons/users.svg";
import { ReactComponent as Form } from "../../assets/icons/folder.svg";
import { ReactComponent as Api } from "../../assets/icons/api_white.svg";
import { ReactComponent as Produto } from "../../assets/icons/feed_white.svg";
import grafico1 from '../../assets/img/grafico-de-colunas-mais-bolsas.jpg';
import grafico2 from '../../assets/img/tipos-de-graficos-matematica.jpg';
import grafico3 from '../../assets/img/tipos-graficos-barras-matematica.jpg';

const itens = [
  {
    nome: "Orçamento",
    icone: <Form className="icone" />,
    link: "/orcamento-produtos",
  },
  {
    nome: "Cadastro de Clientes",
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
    <ContainerHome>
      <Cards lista={itens} />
      <AreaChars>
        <h2>Gráficos</h2>
        <div className="div-grafico">
          <img src={grafico1} />
          <img src={grafico2} />
          <img src={grafico3} />

        </div>
      </AreaChars>
    </ContainerHome>
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
                <div className="title-div">
                  <span className="title">{lista.nome}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </AreaCard>
    </>
  );
}

export default Page;
