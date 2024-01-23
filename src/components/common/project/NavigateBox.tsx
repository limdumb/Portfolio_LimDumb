import styled from "styled-components";
import { IconContainer, ArchiveIcon } from "../archive/ArchiveBox";
import Link from "next/link";

interface NaviageBoxProps {
  category: string;
  url?: string;
}

const NavigateBoxContainer = styled.div`
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
  color: black;

  & > a {
    display: flex;
  }

  @media screen and (max-width: 760px) {
    & {
      width: 45%;
      display: flex;
    }

    & > a > h2 {
      font-size: 15px;
      display: flex;
      align-items: center;
    }
  }
`;

export default function NavigateBox(props: NaviageBoxProps) {
  return (
    <NavigateBoxContainer>
      <Link href={props.url ? props.url : ""}>
        {props.category !== "GitHub" ? null : (
          <IconContainer>{ArchiveIcon(props.category)}</IconContainer>
        )}
        <h2>{props.category}</h2>
      </Link>
    </NavigateBoxContainer>
  );
}
