import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  SCHero,
  SCLeft,
  SCRight,
  SCName,
  SCBaslik,
  SCContent,
  SCLink,
  SCGithub,
  SCLinkedin,
} from "../css/Herocss";

function Hero() {
  return (
    <SCHero>
      <SCLeft>
        <SCBaslik>Hİ! 👋</SCBaslik>
        <SCContent>
          I’m Eray. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable full stack products. Let's
          meet!
        </SCContent>
        <SCLink>
          <SCGithub href="https://github.com/eray1yildiz" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SCGithub>

          <SCLinkedin
            href="https://www.linkedin.com/in/eray-yıldız-085629262/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SCLinkedin>
        </SCLink>
        <SCName>Currently Freelancing for Ux, UI, & Web Design Project.</SCName>
        <SCName>Invite me to join your team. </SCName>
      </SCLeft>
      <SCRight>{}</SCRight>
    </SCHero>
  );
}

export default Hero;
