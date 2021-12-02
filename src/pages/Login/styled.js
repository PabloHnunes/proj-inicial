import styled from "styled-components";

export const AreaLateral = styled.div`
    /* Container takes full size */
    height: 100%;
    right: 0;
    position: fixed;
    top: 0;
    width: 100%;

    z-index: 9999;

  .container__overlay {
    /* Take full size */
    height: 100%;
    right: 0;
    position: fixed;
    top: 0;
    width: 100%;

    /* User still can see the content of main page */
    background-color: rgba(0, 0, 0, 0.5);

    z-index: -1;
  }

  .container__sidebar {
    /* Take full height */
    height: 100%;
    right: 0;
    position: fixed;
    top: 0;
    width: 500px;

    /* Background */
    background-color: #fff;
  }
  `;

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 400px;
    margin: auto;
    margin-top: 200px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    
    h1{
        font-size: 24px;
    }
    .titulo{
        display: flex;
        a{
            margin-right: 10px;
        }
    }
    p{
        font-size: 13px;
        color:#9c9c9c;
    }
    .form--input{
        text-align: left;

        label{
            display: block;
        }
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3;

            &:hover{
                border: 1px solid #7d2ae8;
            }
        }
    }
    .footerLogin{
        font-size: 13px;
        a{
            font-weight: bold;
            margin-left: 5px;
            color: #4e129c;
            transition: 0.4s;
            cursor: pointer;

            &:hover{
                color: #7d2ae8;
            }
        }
    }
`;