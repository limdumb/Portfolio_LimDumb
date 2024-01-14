"use client";

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
  flex-wrap: wrap;
  & > :last-child {
    margin-top: 30px;
  }
  @media screen and (max-width: 760px) {
    & {
      display: flex;
      flex-direction: column;
    }

    & > :last-child {
      margin: 0px;
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
              <ArchiveBox
                link={el.link}
                category={el.category}
                key={el.category}
              ></ArchiveBox>
            );
          })}
        </ArchiveContainer>
      </ContentsContainer>
    </MainContainer>
  );
}
