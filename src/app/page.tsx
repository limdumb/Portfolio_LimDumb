"use client";

import styles from "./page.module.css";
import Header from "@/components/common/Header";
import {
  ContentsContainer,
  MainContainer,
} from "@/components/common/project/Project";
import Image from "next/image";
import photo from "/public/photo1.jpg";
import { useState } from "react";
import SideBar from "@/components/common/SideBar";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainContainer category="home">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="home" toggleModal={toggleModal} />
      <ContentsContainer category="home">
        <div className={styles.Contents_Wrapper}>
          <div className={styles.Intro_Image_Wrapper}>
            <Image src={photo} alt="내사진" className={styles.Image_Contents} />
          </div>
          <div className={styles.Intro_Title_Wrapper}>
            <h1>Hello, Senior?</h1>
            <span>Im Web Front End Developer!</span>
            <span>Welcome to Eddie’s Portfolio Tree</span>
          </div>
        </div>
      </ContentsContainer>
    </MainContainer>
  );
}
