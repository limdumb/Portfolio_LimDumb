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
  padding: 40px 20px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    width: 80%;
  }
`;

const GIFContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeatureContainer = styled.ul``;

const FeatureWrapper = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 200;

  & > h2 {
    margin-bottom: 9px;
  }
  margin-bottom: 10px;
`;

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectDetailValue = getProjectDetailValue({ id: params.id });
  return (
    <ProjectDetailContainer>
      <TitleContainer>
        <h1>{projectDetailValue.name}</h1>
        <h4>{projectDetailValue.type}</h4>
      </TitleContainer>
      <DetailMainContainer>
        <GIFContainer>
          <h3>프로젝트 시연 GIF</h3>
        </GIFContainer>
        <h3
          style={{
            color: "rgba(255, 255, 255, 0.5);",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          주요기능
        </h3>
        <FeatureContainer>
          {projectDetailValue.features?.map((el) => {
            return (
              <FeatureWrapper key={el.feature}>
                <h2>{el.feature}</h2>
                <span>{el.discription}</span>
              </FeatureWrapper>
            );
          })}
        </FeatureContainer>
      </DetailMainContainer>
    </ProjectDetailContainer>
  );
}
