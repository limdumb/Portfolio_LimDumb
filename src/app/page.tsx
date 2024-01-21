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
            <h1>꾸준함과 흡수력으로</h1>
            <h2 style={{ marginBottom: "20px" }}>
              성장과 발전을 지속해서 갈망하고
            </h2>
            <h1>새로운것에 두려움이 없는</h1>
            <h2>Front End 개발자 임경인 입니다.</h2>
          </div>
        </div>
      </ContentsContainer>
    </MainContainer>
  );
}
