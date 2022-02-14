import { style } from "@material-ui/system";
import styled from "styled-components";

export const AreaCard = styled.ul`
  width: 750px;
  height: 750px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-flow: column wrap;
  .card {
    list-style: none;
    width: 200px;
    height: 200px;
    border: 5px hidden #fff;
    background-color: #fff;
    border-radius: 13px;
    display: flex;
    .link {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      flex-flow: column wrap;
      justify-content: space-between;
      .icon {
        margin-top: 30%;
        width: 60px;
        height: 60px;
        .icone {
          top: 10%;
          left: 10%;
          width: 100%;
          height: 100%;
          font-size: 1.5rem;
          z-index: 1;
          filter: invert(100%);
        }
      }
      .title-div {
        background-color: #e9e9e9;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 5px hidden #606060;
        border-end-end-radius: 5px;
        border-bottom-left-radius: 5px;
        .title {
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
          font-size: larger;
        }
      }
    }
    :hover {
      filter: brightness(1);
      box-shadow: 10px 7px 10px #ccc;
      transition: 0.5s;
    }
  }
`;

export const AreaChars = styled.div`
  margin-top: 1.7%;
  min-width: 30%;
  width: auto;
  min-height: 70%;
  border: 2px hidden;
  border-radius: 10px;
  background-color: white;
  h2{
    padding: 10px;
  }
  img {
    width: 50%;
    height: 30%;
  }
  .div-grafico {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  :hover {
    //filter: brightness(0.8);
    box-shadow: 10px 7px 10px #ccc;
    transition: 0.5s;
  }
`;

export const ContainerHome = styled.div`
  padding-left: 5px;
  display: flex;
`;
