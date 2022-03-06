import styled from "styled-components";

export const ContainerTabs = styled.div`
  background-color: #eeeeee;
  //padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  max-width: 800px;
  //border-radius: 10px;
  border-end-end-radius: 10px;
  border-start-end-radius: 10px;
  box-shadow: 10px 2px 10px #ccc;
  height: auto;
`;

export const ContainerOrcamento = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 850px;
  min-width: 750px;
  width: auto;

  .tabs-label {
    color: #696a6b;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    margin-right: 0.2rem;
    cursor: pointer;
    background-color: #c1d3e2;
    font-weight: bold;
    transition: background ease 0.3s;
    border-radius: 15px 15px 0 0;
  }

  input[type="radio"]:checked + .tabs-label {
    background: #f0f8ff;
    //color: #343436;
  }
  input[type="radio"]:checked + .tabs-label + .tab {
    display: block;
  }
  input[type="radio"] {
    display: none;
  }
  .tab {
    //  border: 1px solid #343436;
    border-radius: 5px;
    order: 9;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: none;
    padding: 1rem;
    background: #f0f8ff;
    padding: 20px;
  }
  @media (max-width: 465px) {
    .tabs .tab,
    .tabs .tabs-label {
      order: initial;
    }

    .tabs .tabs-label {
      width: 100%;
      margin-left: 50px;
    }
  }
  .form-date__datepicker {
    padding: 15px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black ;
    font-family: "Roboto", sans-serif;
    background-color: #f0f8ff ;
  }
`;

export const LabelDate = styled.h1`
  font-size: 16px;
`;
