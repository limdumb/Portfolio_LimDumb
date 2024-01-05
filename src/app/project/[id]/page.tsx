"use client";

import styled from "styled-components";

interface DetailPageType {
  title: string;
  subTitle: string;
}

const ProjectDetailContainer = styled.div`
  background-color: rgb(60, 67, 94);
  min-height: 100vh;
  padding: 48px;
`;

const TitleContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin-bottom: 20px;
  }
`;

export default function ProjectDetailPage() {
  return (
    <ProjectDetailContainer>
      <TitleContainer>
        <h1>Title 입니다</h1>
        <p>서브타이틀 입니다</p>
      </TitleContainer>
    </ProjectDetailContainer>
  );
}
