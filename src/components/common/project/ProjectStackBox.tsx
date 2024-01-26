import styled from "styled-components";

interface StackPropsType {
  stack: string;
}

const Container = styled.li`
  background-color: rgb(41 44 55);
  height: 100%;
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
`;

export default function ProjectStackBox({ stack }: StackPropsType) {
  return <Container>{stack}</Container>;
}
