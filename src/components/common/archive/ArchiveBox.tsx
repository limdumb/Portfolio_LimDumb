import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import styled from "styled-components";

interface ArchiveBoxPropsType {
  category: string;
}

const ArchiveBoxContainer = styled.div`
  background-color: white;
  width: 45%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  text-decoration: none;
  cursor: pointer;

  & > :first-child {
    display: flex;
    align-items: center;
  }

  & > :last-child {
    margin-top: 10px;
    font-size: 18px;
  }

  li {
    font-size: 13px;
    list-style: circle;
    margin-top: 10px;
  }

  color: black;
`;

const IconContainer = styled.div`
  margin-right: 10px;
  padding-top: 3px;
`;

const ArchiveIcon = (category: ArchiveBoxPropsType["category"]) => {
  switch (category) {
    case "GitHub":
      return <FaGithub size={"30px"} />;
    case "Velog":
      return <SiVelog size={"30px"} color={"rgb(38 201 153)"} />;
  }
};

const ArchiveContents = (category: ArchiveBoxPropsType["category"]) => {
  switch (category) {
    case "GitHub":
      return (
        <ul>
          <b>소스 코드 저장소 입니다.</b>
          <li>과거 프로젝트, 프로그램의 소스코드</li>
          <li>팀 프로젝트 및 연습을 위해 작성한 코드들</li>
          <li>학원을 다니던 시절 했던 프로젝트들의 코드</li>
        </ul>
      );
    case "Velog":
      return (
        <ul>
          <b>공부 및 지식 공유 목적의 블로그</b>
          <li>공부한 것을 작성하고 기록한 블로그</li>
          <li>웹 개발자를 준비하며 탐구해온 관련 지식정리</li>
          <li>공부하며 나 자신을 돌아보는 회고록</li>
        </ul>
      );
  }
};

export default function ArchiveBox(props: ArchiveBoxPropsType) {
  return (
    <ArchiveBoxContainer>
      <div>
        <IconContainer>{ArchiveIcon(props.category)}</IconContainer>
        <h2>{props.category}</h2>
      </div>
      <div>{ArchiveContents(props.category)}</div>
    </ArchiveBoxContainer>
  );
}
