import styled from "styled-components";

export const AreaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2d2d2d;

  .navigation {
    position: relative;
    height: 500px;
    background: #424242;
    width: 70px;
    box-shadow: 10px 0 0 #099c22;
    border-left: 10px solid #424242;
    overflow-x: hidden;
    transition: 0.5s;

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 5px;
  padding-top: 40px;

  .lista {
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    .link {
      position: relative;
      display: flex;
      width: 100%;
      text-decoration: none;
      color: #fff;
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
    /* a::before {
      content: "";
      position: absolute;
      top: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      opacity : 1;
      border-radius: 50%;
      box-shadow: 15px 15px 0 #7C7C7C;
    }
    a::after {
      content: "";
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      opacity : 1;
      border-radius: 50%;
      box-shadow: 15px -15px 0 #7C7C7C;
    } */
  }
  #active {
    background: #099c22;
    a::before {
      content: "";
      position: absolute;
      top: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      //background: #424242;
      border-radius: 50%;
      //box-shadow: 15px 15px 0 #099c22;
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
    }
  }
`;
