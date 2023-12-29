"use client";

import styled from "styled-components";

const BoxContainer = styled.div`
  width: 50%;
  height: 217px;
  background-color: blue;

  @media screen and (max-width: 760px) {
    & {
      height: 235.2px;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
      height: 227px;
    }
  }
`;

const InfoTitle = styled.h2`
  background-color: gray;
  color: rgb(92, 92, 92);
  font-size: 22.5px;
`;

const InfoContents = styled.span`
  font-size: 15px;
  color: rgb(92, 92, 92);
  background-color: purple;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 82.2%;
  padding-top: 14px;
`;

export default function ContentsBox() {
  return (
    <BoxContainer>
      <InfoTitle>장점1</InfoTitle>
      <InfoContainer>
        <InfoContents>장점1서브내용</InfoContents>
      </InfoContainer>
    </BoxContainer>
  );
}
