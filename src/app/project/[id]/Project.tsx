"use client";

import getProjectDetailValue from "@/function/getProjectDetailValue";
import styled from "styled-components";
import styles from "./styles/project.module.css";
import NavigateBox from "@/components/common/project/NavigateBox";
import { GIFImage } from "@/components/common/project/GIFImage";

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

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectDetailValue = getProjectDetailValue({ id: params.id });
  const gifValue = GIFImage({ id: params.id });

  return (
    <ProjectDetailContainer>
      <TitleContainer>
        <h1>{projectDetailValue.name}</h1>
        <h4>{projectDetailValue.type}</h4>
      </TitleContainer>
      <DetailMainContainer>
        <h3
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          배포링크
        </h3>
        <div className={styles.Navigate_Box_Wrapper}>
          <NavigateBox category="GitHub" url={projectDetailValue.github} />
          {projectDetailValue.url?.length !== 0 ? (
            <NavigateBox category="Service" url={projectDetailValue.url} />
          ) : null}
        </div>
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
