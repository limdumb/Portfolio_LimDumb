"use client";

import Footer from "@/components/Footer";
import Header from "../Header";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";
import styles from "./style/project.module.css";
import { useState } from "react";
import SideBar from "../SideBar";

interface ContainerPropsType {
  category: "aboutme" | "project" | "record" | "stack" | "home";
}

export const MainContainer = styled.div<ContainerPropsType>`
  background-color: ${(props) =>
    props.category === "aboutme"
      ? "#FFFFFF"
      : props.category === "project"
      ? "#FFFFFF"
      : props.category === "stack"
      ? "#EEEEEE"
      : props.category === "record"
      ? "#2F2F2F"
      : "#00A564"};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 93px 0px 40px 0px;

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      padding: 121px 0px 40px 0px;
    }
  }
`;

export const ContentsContainer = styled.div`
  margin: 0 auto;
  min-height: 555px;
  width: 1200px;
  display: flex;

  @media screen and (max-width: 760px) {
    & {
      max-width: 340px;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      width: 960px;
    }
  }
`;

const ProjectContainer = styled.div`
  min-height: calc(555px - 101px);
  min-width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    & {
      min-height: calc(555px - 46px);
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      min-height: calc(555px - 54px);
    }
  }
`;

export default function Project() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainContainer category="project">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="project" toggleModal={toggleModal} />
      <ContentsContainer>
        <h1 className={styles.Category_Title}>Project</h1>
        <ProjectContainer>
          <ProjectBox
            timeline={"2021. 4"}
            title={"진짜개발자"}
            category={"Team"}
            information={
              "자신의 개발 실력을 GitHub 프로필 README.md에 보여줄 수 있는 템플릿입니다. 오픈 소스에 기여한 것을 기준으로 개발 실력을 판단하는 것이 목적입니다. 채용 담당자는 이 템플릿을 통해 빠르고 직관적으로 개발자의 오픈 소스 기여도를 파악할 수 있습니다"
            }
            detailNav={"/navigate"}
          />
        </ProjectContainer>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
