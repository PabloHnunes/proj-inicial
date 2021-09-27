import styled from "styled-components";

export const BtnDefautIcons = styled.button`
    display: flex;
    aling-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;

    &:hover{
        background-color: #ccc;
    }
    .center{
        text-align: center;
        width: 100%;
    }

`;

export const BtnDefaut = styled(BtnDefautIcons)`
    background-image: linear-gradient(to right,#1D4064, #9FCAEC);
    color:#fff;
    display: inline;
    transition: 0.9s;

    &:hover{
        background-image: linear-gradient(to right,#4169E1, #B0C4DE);
    }
`;