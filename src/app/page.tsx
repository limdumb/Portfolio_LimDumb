"use client";

import styles from "./page.module.css";
import Header from "@/components/common/Header";
import {
  ContentsContainer,
  MainContainer,
} from "@/components/common/project/Project";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <MainContainer category="home">
      <Header category="home" />
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
