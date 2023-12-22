"use client";

import styled from "styled-components";
import styles from "./page.module.css";
import Header from "@/components/common/Header";

// Web Front End 개발자 임경인 입니다
// All Career Year 0
// It's New! 나의 첫 커리어를 시작할 회사를 찾고있습니다.
// My 4 Advantages

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
      <ContentsContainer>
        <h1>Hello, Senior?</h1>
        <h1>Im Web Front End Developer!</h1>
        <h2>Welcome to Eddie’s Portfolio Tree</h2>
      </ContentsContainer>
    </div>
  );
}
