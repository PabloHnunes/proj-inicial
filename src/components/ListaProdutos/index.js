import React from "react";
import CardItem from "../CardItem";
import { AreaItens } from "./styled";

function ListaProdutos({ itens, apagarItem, editarItem }) {
  return (
    <div>
      <AreaItens>
        <ul className="lista">
          {itens.map((item, index) => {
            return (
              <li className="lista_item" key={item.id}>
                <CardItem
                  id={item.id}
                  cliente={
                    item.cliente.label ? item.cliente.label : item.cliente
                  }
                  produto={
                    item.produto.label ? item.produto.label : item.produto
                  }
                  tamanho={
                    item.tamanho.label ? item.tamanho.label : item.tamanho
                  }
                  cor={item.cor.label ? item.cor.label : item.cor}
                  bordado={
                    item.bordado.label ? item.bordado.label : item.bordado
                  }
                  apagarItem={apagarItem}
                  editarItem={editarItem}
                  editMode={item.editMode}
                />
              </li>
            );
          })}
        </ul>
      </AreaItens>
    </div>
  );
}

export default ListaProdutos;
