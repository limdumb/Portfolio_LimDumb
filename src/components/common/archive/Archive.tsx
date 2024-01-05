"use client";
// Home 이미지,글 원컬럼
// AsideBar 고치기

// Project 상세페이지 => GIF 기능설명 ( 전체적인 기능 사용 )
// Project 기능별 Discription 추가 ( 모바일은 Gif와 기능별 Discription이 coloumn 으로)
// Stack 정리
// Page 넘어갈때 애니메이션 라이브러리 찾아보기

import Header from "../Header";
import { MainContainer, ContentsContainer } from "../project/Project";
import styles from "./styles/archive.module.css";
import { useState } from "react";
import SideBar from "../SideBar";
import styled from "styled-components";
import { getArchiveValue } from "@/function/getArchiveValue";
import ArchiveBox from "./ArchiveBox";

const ArchiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(47, 47, 47);
  margin-top: 20px;
  @media screen and (max-width: 760px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
    }
  }
`;

export default function Archive() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const archiveArr = getArchiveValue();

  return (
    <MainContainer category="archive">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="archive" toggleModal={toggleModal} />
      <ContentsContainer>
        <h1 className={styles.Category_Title}>Archive</h1>
        <ArchiveContainer>
          {archiveArr.map((el) => {
            return (
              <ArchiveBox category={el.category} key={el.category}></ArchiveBox>
            );
          })}
        </ArchiveContainer>
      </ContentsContainer>
    </MainContainer>
  );
}
