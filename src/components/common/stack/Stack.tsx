"use client";

import Header from "../Header";
import Footer from "@/components/Footer";
import styles from "./style/stack.module.css";
import StackBox from "./StackBox";
import { ContentsContainer, MainContainer } from "../project/Project";

export default function Stack() {
  return (
    <MainContainer category="stack">
      <Header category="stack" />
      <ContentsContainer>
        <div>
          <h1 className={styles.Intro_Title}>Stack</h1>
          <StackBox />
          <StackBox />
          <StackBox />
          <StackBox />
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
