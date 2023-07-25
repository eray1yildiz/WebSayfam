import React from "react";
import styled from "styled-components";

import { SCHeader, SCNav, SCA1, SCA2, SCA3, SCA4 } from "../css/Headercss";

function Header() {
  return (
    <SCHeader>
      <SCNav>
        <SCA1 href="#skills">Skills</SCA1>
        <SCA2 href="#profile">Profile</SCA2>
        <SCA3 href="#projects">Projects</SCA3>
        <SCA4 href="mailto:eray1yildiz@hotmail.com">Contact Me</SCA4>
      </SCNav>
    </SCHeader>
  );
}

export default Header;
