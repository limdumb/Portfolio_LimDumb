"use client";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 20;
  width: 100%;
  height: 40px;
  padding: 0px 60px;
  bottom: 0px;
  background-color: rgb(0, 165, 100);
  color: rgba(255, 255, 255, 0.52);

  @media screen and (max-width: 760px) {
    & {
      display: none;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <span>+82 10-7702-9884</span>
      <span>ruddls980507@gmail.com</span>
    </FooterContainer>
  );
}
