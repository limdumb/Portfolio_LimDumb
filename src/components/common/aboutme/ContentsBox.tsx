"use client";

import styled from "styled-components";

interface ContentsBoxPropsType {
  title: string;
  contents: string;
}

const BoxContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 760px) {
    & {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;

const InfoTitle = styled.h2`
  color: rgb(92, 92, 92);
  font-size: 22.5px;
  display: block;
  font-weight: 700;
  opacity: 0.65;
`;

const InfoContents = styled.span`
  font-size: 15px;
  color: rgb(92, 92, 92);
  font-weight: 300;
  opacity: 0.8;
`;

const InfoContainer = styled.div`
  width: 90%;
  height: 82.2%;
  padding-top: 14px;

  @media screen and (max-width: 760px) {
    & {
      width: 100%;
    }
  }
`;

export default function ContentsBox(props: ContentsBoxPropsType) {
  return (
    <BoxContainer>
      <InfoTitle>{props.title}</InfoTitle>
      <InfoContainer>
        <InfoContents>{props.contents}</InfoContents>
      </InfoContainer>
    </BoxContainer>
  );
}
