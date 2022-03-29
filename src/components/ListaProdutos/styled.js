import styled from "styled-components";

export const AreaItens = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: auto;

  .lista {
    background-color: #f0f8ff;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }

  .lista_item {
    margin: 12px;
    width: auto;
    height: auto;
    display: inline;
  }
`;
