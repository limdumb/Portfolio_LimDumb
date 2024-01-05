"use client";

import Footer from "@/components/Footer";
import Header from "../Header";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";
import styles from "./style/project.module.css";
import { useState } from "react";
import SideBar from "../SideBar";
import { getProjectDiscription } from "@/function/getProject";

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

  @media screen and (max-width: 760px) {
    & {
      padding: 133px 0px 40px 0px;
      display: flex;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      padding: 121px 0px 40px 0px;
    }
  }
`;

export const ContentsContainer = styled.div<{ category?: "home" }>`
  margin: 0 auto;
  min-height: 555px;
  width: 1200px;
  display: flex;
  flex-direction: ${(props) => (props.category ? "none" : "column")};
  margin-bottom: 30px;

  @media screen and (max-width: 760px) {
    & {
      max-width: 95%;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      width: 80%;
    }
  }

  & > h1 {
    justify-content: flex-start;
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

  const projectDiscription = getProjectDiscription();

  return (
    <MainContainer category="project">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="project" toggleModal={toggleModal} />
      <ContentsContainer>
        <ProjectContainer>
          <h1 className={styles.Category_Title}>Project</h1>
          {projectDiscription.map((el) => {
            return (
              <ProjectBox
                key={el.title}
                timeline={el.timeline}
                title={el.title}
                category={el.type}
                information={el.contents}
                detailNav={el.linkURL}
              />
            );
          })}
        </ProjectContainer>
      </ContentsContainer>
    </MainContainer>
  );
}
