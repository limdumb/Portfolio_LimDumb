"use client";

import Footer from "@/components/Footer";
import Header from "../Header";
import styles from "./style/aboutMe.module.css";
import ContentsBox from "./ContentsBox";
import { ContentsContainer, MainContainer } from "../project/Project";
import { useState } from "react";
import SideBar from "../SideBar";
import { getAboutMe } from "@/function/getAboutMe";

export default function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const aboutMeArr = getAboutMe();

  return (
    <MainContainer category="aboutme">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="aboutme" toggleModal={toggleModal} />
      <ContentsContainer>
          <h1 className={styles.Category_Title}>About Me</h1>
        <div className={styles.Contents_Wrapper}>
          <div className={styles.Info_Contents_Wrapper}>
            {aboutMeArr.map((el) => {
              return (
                <ContentsBox
                  key={el.title}
                  title={el.title}
                  contents={el.contents}
                />
              );
            })}
          </div>
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
