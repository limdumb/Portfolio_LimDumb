"use client";

import { MainContainer, ContentsContainer } from "@/app/page";
import Footer from "@/components/Footer";
import Header from "../Header";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const ProjectContainer = styled.div`
  min-height: calc(555px - 61px);
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
  return (
    <MainContainer category="aboutme">
      <Header />
      <ContentsContainer>
        <h1>Project</h1>
        <ProjectContainer>
          <ProjectBox
            timeline={"2021. 4"}
            title={"진짜개발자"}
            category={""}
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
