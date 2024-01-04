"use client";
/*
1/3일 해야하는것
1. Stack 레이아웃 재정의
2. Record 페이지 아이콘 넣기
3. About Me, Project 칸 채우기
4. Main 문구 생각해서 넣기
 */
import Footer from "@/components/Footer";
import Header from "../Header";
import { MainContainer, ContentsContainer } from "../project/Project";
import styles from "./styles/record.module.css";
import { useState } from "react";
import SideBar from "../SideBar";

export default function Record() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainContainer category="record">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="record" toggleModal={toggleModal} />
      <ContentsContainer>
        <h1 className={styles.Category_Title}>Record Pletform</h1>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
