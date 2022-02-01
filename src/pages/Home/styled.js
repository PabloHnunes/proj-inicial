import styled from "styled-components";

export const AreaCard = styled.ul`
  width: 750px;
  height: 750px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-flow: column wrap;
  .card {
    list-style: none;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 13px;
    display: flex;
    align-items: center;
    .link {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      flex-flow: column wrap;
      justify-content: center;
      .icon {
        min-width: 60px;
        height: 60px;
        .icone {
          width: 100%;
          height: 100%;
          font-size: 1.5rem;
          z-index: 1;
          filter: invert(100%);
        }
      }
      .title {
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
      }
    }
  }
`;
