import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 200px;
  max-width: 250px;
  min-height: 220px;
  background-color: #eeeeee;
  border-radius: 4px;
  flex-wrap: wrap;
  box-shadow: 0px 5px 15px #9A9A9A;
  padding: 16px;

  .card-item_options{
    @keyframes bounce {
      0%, 20%, 60%, 100%{
        -webkit-transform: translateY(0);
        transform: translateY(0) ;
      }
      40%{
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px) ;
      }
      80%{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px) ;
      }
    }
    width: 100%;
    display: flex;
    align-items: center ;
    justify-content: right;
    .card-item_icone{
      :hover{
        cursor: pointer ;
        animation: bounce 1s;
      }
    }
  }
  .card-item_cliente{
    color: #202020;
  }

  .card-item_cabecalho {
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-item_texto {
    margin-top: 8px;
    font-size: 1em;
  }

  .card-item_titulo {
    color: #003366;
    font-size: 1.2em;
    margin-right: 12px;
  }
`;
