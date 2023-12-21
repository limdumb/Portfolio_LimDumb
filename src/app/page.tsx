"use client";

import styled from "styled-components";
import styles from "./page.module.css";
import Header from "@/components/common/Header";

const ContentsContainer = styled.div`
  margin: 0 auto;
  background-color: pink;
  min-height: 350px;
  width: 1200px;
  @media screen and (max-width: 760px) {
    & {
      max-width: 340px;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      width: 960px;
    }
  }
`;



  

export default function Home() {
  return (
    <div className={styles.Main_Container}>
      <Header></Header>
      <ContentsContainer></ContentsContainer>
    </div>
  );
}
