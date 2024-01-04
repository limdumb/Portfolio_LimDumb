"use client";

import Footer from "@/components/Footer";
import Header from "../Header";
import styles from "./style/aboutMe.module.css";
import ContentsBox from "./ContentsBox";
import { ContentsContainer, MainContainer } from "../project/Project";

export default function AboutMe() {
  return (
    <MainContainer category="aboutme">
      <Header category="aboutme" />
      <ContentsContainer>
        <div>
          <h1 className={styles.Category_Title}>About Me</h1>
          <div className={styles.Info_Contents_Wrapper}>
            <ContentsBox title={"d"} contents={"d"} />
            <ContentsBox title={"d"} contents={"d"} />
            <ContentsBox title={"a"} contents={"a"} />
            <ContentsBox title={"f"} contents={"f"} />
          </div>
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
