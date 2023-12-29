"use client";

import styled from "styled-components";
import styles from "./page.module.css";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
interface ContainerPropsType {
  category: "aboutme" | "project" | "record" | "stack";
}

export const MainContainer = styled.div<ContainerPropsType>`
  background-color: ${(props) =>
    props.category === "aboutme" ? "#FFFFFF" : "#00a564"};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 93px 0px 40px 0px;
  @media screen and (max-width: 760px) {
    & {
      padding: 171px 0px 40px 0px;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      padding: 121px 0px 40px 0px;
    }
  }
`;

export const ContentsContainer = styled.div`
  margin: 0 auto;
  background-color: pink;
  min-height: 555px;
  width: 1200px;
  display: flex;
  flex-direction: column;

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
    <MainContainer category="project">
      <Header />
      <ContentsContainer>
        <div className={styles.Intro_Title_Wrapper}>
          <h1>Hello, Senior?</h1>
          <h1>Im Web Front End Developer!</h1>
          <h2>Welcome to Eddie’s Portfolio Tree</h2>
        </div>
        <div className={styles.Intro_Image_Wrapper}>
          <div>
            <Image src={""} alt="" />
          </div>
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
