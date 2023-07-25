import React from "react";
import styled from "styled-components";
import {
  SCFooter,
  SCTitleFooter,
  SCAFooter,
  SCF,
  SCF1,
  SCF2,
} from "../css/Footercss";

function Footer() {
  return (
    <SCFooter>
      <SCTitleFooter>Let’s work together on your next product.</SCTitleFooter>
      <SCAFooter>
        <SCF href="https://github.com/eray1yildiz" target="_blank">
          Github
        </SCF>
        <SCF1
          href="https://www.linkedin.com/in/eray-yıldız-085629262/"
          target="_blank"
        >
          LinkedIn
        </SCF1>
        <SCF2 href="mailto:eray1yildiz@hotmail.com" target="_blank">
          Email
        </SCF2>
      </SCAFooter>
    </SCFooter>
  );
}
export default Footer;
