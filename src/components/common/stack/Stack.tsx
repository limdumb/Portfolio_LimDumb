"use client";

import Header from "../Header";
import Footer from "@/components/Footer";
import styles from "./style/stack.module.css";
import StackBox from "./StackBox";
import { ContentsContainer, MainContainer } from "../project/Project";
import { useState } from "react";
import SideBar from "../SideBar";

export default function Stack() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainContainer category="stack">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="stack" toggleModal={toggleModal} />
      <ContentsContainer>
        <div>
          <h1 className={styles.Intro_Title}>Stack</h1>
          <StackBox />
          <StackBox />
          <StackBox />
          <StackBox />
        </div>
      </ContentsContainer>
    </MainContainer>
  );
}
