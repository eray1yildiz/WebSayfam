import React from "react";
import styled from "styled-components";
import İnstagram from "../img/instagram.png";
import Minnet from "../img/minnet.png";
import {
  SCProjects,
  SCTitle5,
  SCSection,
  SCİnstagram,
  SCTitlepizza,
  SCContentpizza,
  SCBilinen,
  SCTodo,
  SCTitletodo,
  SCPo,
  SCContentTodo,
  SCT,
  SCYon,
  SCYon2,
  SCL,
  SCL2,
  SCImg1,
} from "../css/Projectscss";

function Projects() {
  return (
    <>
      <SCProjects id="projects">
        <SCTitle5>Projects</SCTitle5>
        <SCSection>
          <SCİnstagram>
            <SCTitlepizza>İnstagram Starter</SCTitlepizza>
            <SCContentpizza>İnstagram!</SCContentpizza>
            <SCBilinen>
              <SCT>react</SCT>
              <SCT>vercel</SCT>
              <SCT>axios</SCT>
              <SCT>router</SCT>
            </SCBilinen>
            <SCYon>
              <SCL
                href="https://github.com/eray1yildiz/FSWeb-S6G2-Instagram-Starter"
                target="_blank"
              >
                View on Github
              </SCL>
              <SCL
                href="https://fs-web-s6-g2-instagram-starter-ashy.vercel.app"
                target="_blank"
              >
                Go to app →
              </SCL>
            </SCYon>
            <SCImg1>
              <img src={İnstagram} style={{ width: "100%", height: "100%" }} />
            </SCImg1>
          </SCİnstagram>
          <SCTodo>
            <SCTitletodo>Gratitude Journal</SCTitletodo>
            <SCContentTodo>
              Shall we write a gratitude journal?. Let's go to the gratitude
              diary page!
            </SCContentTodo>
            <SCPo>
              <SCT>react</SCT>
              <SCT>redux</SCT>
              <SCT>axios</SCT>
              <SCT>router</SCT>
              <SCT>vercel</SCT>
            </SCPo>
            <SCYon2>
              <SCL2
                href="https://github.com/eray1yildiz/fsweb-s10-challenge"
                target="_blank"
              >
                View on Github
              </SCL2>
              <SCL2
                href="https://fsweb-s10-challenge-kappa.vercel.app"
                target="_blank"
              >
                Go to app →
              </SCL2>
            </SCYon2>
            <SCImg1>
              <img src={Minnet} style={{ width: "100%", height: "100%" }} />
            </SCImg1>
          </SCTodo>
        </SCSection>
      </SCProjects>
    </>
  );
}

export default Projects;
