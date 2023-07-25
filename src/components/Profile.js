import React from "react";
import styled from "styled-components";
import {
  SCProfile,
  SCTitle2,
  SCInformation,
  SCBasic,
  SCTitle3,
  SCAbout,
  SCIcerik,
  SCTd1,
  SCTd2,
  SCTitle4,
  SCAciklama1,
} from "../css/Profilecss";

function Profile() {
  return (
    <SCProfile id="profile">
      <SCTitle2>Profile</SCTitle2>
      <SCInformation>
        <SCBasic>
          <SCIcerik>
            <SCTitle3>Basic Information</SCTitle3>
            <table>
              <tbody>
                <tr>
                  <SCTd1>Date of Birth</SCTd1>
                  <SCTd2>07.05.1997</SCTd2>
                </tr>
                <tr>
                  <SCTd1>City of Residence</SCTd1>
                  <SCTd2>İstanbul</SCTd2>
                </tr>
                <tr>
                  <SCTd1>Education Status</SCTd1>
                  <SCTd2>Selçuk Unv/İstatistik</SCTd2>
                </tr>
                <tr>
                  <SCTd1>Preferred Role</SCTd1>
                  <SCTd2>Full-Stack Developer</SCTd2>
                </tr>
              </tbody>
            </table>
          </SCIcerik>
        </SCBasic>
        <SCAbout>
          <SCTitle4>About Me</SCTitle4>
          <SCAciklama1>
            Lorem ipsum ,dolor sit amet concectetur adipisicing elit.Veniam
            aut,odit laborum
          </SCAciklama1>
          <SCAciklama1>
            Mnima accusamus ratione soluta aperim sit voluptata Dicta quad
            deserunt quam temporibus cumque magnam!
          </SCAciklama1>
        </SCAbout>
      </SCInformation>
    </SCProfile>
  );
}

export default Profile;
