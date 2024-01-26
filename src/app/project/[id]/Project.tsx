"use client";

import getProjectDetailValue from "@/function/getProjectDetailValue";
import styled from "styled-components";
import styles from "./styles/project.module.css";
import NavigateBox from "@/components/common/project/NavigateBox";
import { GIFImage } from "@/components/common/project/GIFImage";
import ProjectStackBox from "@/components/common/project/ProjectStackBox";

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
  width: 75%;

  & > ul {
    color: rgba(255, 255, 255, 0.782);
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

  & > ul > li {
    margin-top: 5px;
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    width: 80%;
    & > ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    & > ul > li {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 760px) {
    & > ul > li {
      font-size: 12px;
      margin-top: 5px;
      margin-right: 10px;
    }

    & > ul {
      margin-top: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
    width: 100%;
  }
`;

const DetailMainContainer = styled.div`
  width: 75%;
  background-color: rgb(41 44 55);
  border-radius: 6px;
  min-height: 100vh;
  padding: 30px;

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
  justify-content: center;

  & > div {
    margin-bottom: 20px;
  }

  & > div > h3 {
    margin-bottom: 10px;
  }

  & div > span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }

  & div > div {
    margin-top: 10px;
  }
`;

const ContributionListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const DiscriptionWrapper = styled.div`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 30px;

  & > span {
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
  }

  & > h3 {
    margin-bottom: 5px;
  }
`;

const ContributionListWrapper = styled.ul`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  border-radius: 10px;

  & > h3 {
    margin-bottom: 10px;
  }

  & > li {
    line-height: 25px;
    list-style-type: circle;
  }

  @media screen and (max-width: 760px) {
    & > li {
      list-style-type: none;
      line-height: 28px;
    }
  }
`;

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectDetailValue = getProjectDetailValue({ id: params.id });
  const gifValue = GIFImage({ id: params.id });

  return (
    <ProjectDetailContainer>
      <TitleContainer>
        <h1>{projectDetailValue.name}</h1>
        <h4>{projectDetailValue.type}</h4>
        <ul>
          {projectDetailValue.stack?.map((el) => {
            return <ProjectStackBox key={el} stack={el} />;
          })}
        </ul>
      </TitleContainer>
      <DetailMainContainer>
        <h3
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          {projectDetailValue.url ? "배포링크" : "GitHub 링크"}
        </h3>
        <div className={styles.Navigate_Box_Wrapper}>
          <NavigateBox category="GitHub" url={projectDetailValue.github} />
          {projectDetailValue.url ? (
            <NavigateBox category="Service" url={projectDetailValue.url} />
          ) : null}
        </div>
        {projectDetailValue.contribution ? (
          <>
            <h3
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "20px",
                display: "flex",
              }}
            >
              프로젝트 기여도 {projectDetailValue.contribution?.percentage}
            </h3>
            <ContributionListContainer>
              <ContributionListWrapper>
                <h3>기능 리스트</h3>
                {projectDetailValue.contribution?.features.map((el) => {
                  return <li key={el}>{el}</li>;
                })}
              </ContributionListWrapper>
              <ContributionListWrapper>
                <h3>총 구현 리스트</h3>
                {projectDetailValue.contribution?.creates.map((el) => {
                  return <li key={el}>{el}</li>;
                })}
              </ContributionListWrapper>
            </ContributionListContainer>
            <DiscriptionWrapper>
              <h3>Discription</h3>
              <span>{projectDetailValue.contribution?.discription}</span>
            </DiscriptionWrapper>
          </>
        ) : null}
        <h3
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          주요기능
        </h3>
        <GIFContainer>
          {gifValue &&
            gifValue.map((el) => {
              return (
                <div key={el.title}>
                  <h3>{el.title}</h3>
                  <span>{el.discription}</span>
                  <div>{el.gif}</div>
                </div>
              );
            })}
        </GIFContainer>
      </DetailMainContainer>
    </ProjectDetailContainer>
  );
}
