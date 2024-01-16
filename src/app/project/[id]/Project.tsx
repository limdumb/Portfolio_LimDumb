"use client";

import getProjectDetailValue from "@/function/getProjectDetailValue";
import styled from "styled-components";

const ProjectDetailContainer = styled.div`
  background-color: rgb(60, 67, 94);
  min-height: 100vh;
  padding: 48px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 30px;
  }
`;

const TitleContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const DetailMainContainer = styled.div`
  background-color: rgb(41 44 55);
  border-radius: 6px;
  min-height: 100vh;
  flex-direction: column;
  width: 75%;

  @media screen and (max-width: 760px) {
    width: 100%;
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    width: 80%;
  }
`;

const FeatureContainer = styled.div``;

const FeatureWrapper = styled.div``;

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectDetailValue = getProjectDetailValue({ id: params.id });
  return (
    <ProjectDetailContainer>
      <TitleContainer>
        <h1>{projectDetailValue.name}</h1>
      </TitleContainer>
      <DetailMainContainer>
        <div></div>
        <FeatureContainer>
          {projectDetailValue.features?.map((el) => {
            return (
              <FeatureWrapper key={el.feature}>{el.feature}</FeatureWrapper>
            );
          })}
        </FeatureContainer>
      </DetailMainContainer>
    </ProjectDetailContainer>
  );
}
