import React from "react";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";
import { ReactComponent as EditSvg } from "../../assets/icons/edit_black.svg";
import { Card } from "./styled";

const CardItem = ({
  id,
  cliente,
  produto,
  tamanho,
  cor,
  bordado,
  apagarItem,
  editarItem
}) => {
  return (
    <Card>
      <div className="card-item_options">
        <EditSvg className="card-item_icone" onClick={() => {
          console.log(id);
          editarItem(id);
        }} />
        <DeleteSvg
          className="card-item_icone"
          onClick={() => {
            apagarItem(id);
          }}
        />
      </div>
      <h2 className="card-item_cliente">{cliente}</h2>
      <header className="card-item_cabecalho">
        <h3 className="card-item_titulo">{produto}</h3>
      </header>
      <p className="card-item_texto">Tamanho: {tamanho}</p>
      <p className="card-item_texto">Cor: {cor}</p>
      <p className="card-item_texto">Bordado: {bordado}</p>
    </Card>
  );
};

export default CardItem;
