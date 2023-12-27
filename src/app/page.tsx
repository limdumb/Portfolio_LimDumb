"use client";

import styled from "styled-components";
import styles from "./page.module.css";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// Web Front End 개발자 임경인 입니다
// All Career Year 0
// It's New! 나의 첫 커리어를 시작할 회사를 찾고있습니다.
// My 4 Advantages

const ContentsContainer = styled.div`
  margin: 0 auto;
  background-color: pink;
  min-height: 350px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      <Header />
      <ContentsContainer>
        <div className={styles.Intro_Title_Wrapper}>
          <h1>Hello, Senior?</h1>
          <h1>Im Web Front End Developer!</h1>
          <h2>Welcome to Eddie’s Portfolio Tree</h2>
        </div>
        <div className={styles.Intro_Image_wrapper}>
          <div>
            <Image src={""} alt="" />
          </div>
        </div>
      </ContentsContainer>
      <Footer />
    </div>
  );
}
