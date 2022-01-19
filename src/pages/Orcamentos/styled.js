import styled from "styled-components";

export const ContainerTabs = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 800px;
  border-radius: 5px;
  box-shadow: 10px 2px 10px #ccc;
  height: auto;
`;


export const ContainerOrcamento = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 850px;
  width: auto;

  .tabs-label {
    color: #696A6B;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    margin-right: 0.2rem;
    cursor: pointer;
    background-color: #C1D3E2;
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
`;
