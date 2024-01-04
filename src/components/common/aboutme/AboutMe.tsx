"use client";

import Footer from "@/components/Footer";
import Header from "../Header";
import styles from "./style/aboutMe.module.css";
import ContentsBox from "./ContentsBox";
import { ContentsContainer, MainContainer } from "../project/Project";
import { useState } from "react";
import SideBar from "../SideBar";

export default function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainContainer category="aboutme">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="aboutme" toggleModal={toggleModal} />
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
