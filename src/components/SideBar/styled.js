import styled from "styled-components";

export const AreaHeader = styled.div`
  display: flex;
  min-height: 100vh;
  top: 0;
  left:0;

  .navigation {
    min-height: 100vh;
    display: flex;
    height: auto;
    //background-image: linear-gradient(to bottom, #9fcaec, #1d4064);
    background: var(#eeeeee);
    width: 60px;
    overflow-x: hidden;
    transition: 0.5s;
    padding: 0;
    :hover {
      width: 300px;
    }
  }
  .logo {
    flex: 1;
    img {
      width: 50px;
    }
    
  }
`;

export const AreaLista = styled.ul`
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .lista {
    position: relative;
    list-style: none;
    width: 100%;

    .link {
      position: relative;
      display: flex;
      width: 100%;
      text-decoration: none;
      color: #fff;
      margin: 0%;
      flex-direction: row;
      .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        text-align: center;
        line-height: 70px;
        .icone {
          width: 25px;
          height: 25px;
          position: relative;
          font-size: 1.5rem;
          z-index: 1;
          fill: #606060;
        }
      }
      .title {
        position: relative;
        display: block;
        padding-left: 10px;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
        color: #000000;
      }
    }
  }
  .lista:hover{
    filter: brightness(0.5);
    .title{
      color: #000000;
    }
    .icone{
      fill:#003366;
    }
  }
  #active {

    .title{
      color: #000000;
    }
    .icone{
      fill:#003366;
      filter: brightness(1.5);
    } 
  }
`;
