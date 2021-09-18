import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right,#00BFFF, #00FF7F);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        aling-itens: center;
    }

    .logo{
        flex: 1;
        img{
            width: 50px;
        }
    }

    nav{
        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 20px;
            a{
                text-decoration: none;
                color: #fff;

                &:hover{
                    color:#4F4F4F;
                    font-size: 20px;
                }
            }
        }
    }
`;