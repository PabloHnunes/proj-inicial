import React from "react";
import Logo from "../../assets/img/logo-react-2.png";
import { AreaNav, AreaNavList, AreaLogo, AreaImg } from "../NavBar/styled";

function NavBar(props) {
  return (
    <AreaNav>
      <AreaLogo>
        <AreaImg src={Logo}></AreaImg>
      </AreaLogo>

      <AreaNavList>{props.children}</AreaNavList>

    </AreaNav>
  );
}

export default NavBar;
