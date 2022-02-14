import styled from "styled-components";

export const AreaNav = styled.nav`
  display: flex;
  height: var(--nav-size);
  background-image: linear-gradient(to right, #9fcaec, #1d4064);
  padding: 0 1rem;
`;

export const AreaNavList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const AreaLogo = styled.div`
  max-width: 100%;
  height: 20%;
  flex: 1;
`;

export const AreaImg = styled.img`
  width: 50px;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
