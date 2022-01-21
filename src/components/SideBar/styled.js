import styled from "styled-components";

export const AreaHeader = styled.div`
  display: flex;
  min-height: 100vh;
  top: 0;
  left:0;

  .navigation {
    //position: absolute;
    min-height: 100vh;
    display: flex;
    height: auto;
    background: #424242;
    width: 70px;
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
  //position: absolute;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //padding-left: 5px;
  //padding-top: 40px;

  .lista {
    position: relative;
    list-style: none;
    width: 100%;
    /* border-top-left-radius: 20px;
    border-bottom-left-radius: 20px; */

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
        text-aling: center;
        line-height: 70px;
        .icone {
          width: 20px;
          height: 20px;
          position: relative;
          font-size: 1.5rem;
          z-index: 1;
          margin-left: 25px;
        }
      }
      .title {
        position: relative;
        display: block;
        padding-left: 10px;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
        color: #fff;
      }
    }
  }
  .lista:hover{
    background: #7C7C7C;
  }
  #active {
    background: #099c22;
    /* a::before {
      content: "";
      position: absolute;
      top: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      //background: #424242;
      border-radius: 50%;
      box-shadow: 15px 15px 0 #099c22;
    }
    a::after {
      content: "";
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      background: #424242;
      border-radius: 50%;
      //box-shadow: 15px -15px 0 #099c22;
    } */
  }
`;
