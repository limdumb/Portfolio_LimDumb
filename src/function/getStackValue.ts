interface StackType {
  stack: string;
  discription: string;
}

interface StackValueType {
  language: StackType[];
  front: StackType[];
  framWork: StackType[];
}

export const getStackValue = () => {
  const result: StackValueType = {
    language: [
      {
        stack: "JavaScript",
        discription:
          "기초적인 문법 및 구동방식에 대해서는 알고 있지만 React를 먼저 시작했다보니 Vanila JS로는 웹을 만들기는 어려움을 겪음",
      },
      {
        stack: "TypeScript",
        discription:
          "interface 및 Type을 사용 할 수 있고 제네릭타입 및 Data를 받아오는 Type등등을 지정하는데 무리가 없음",
      },
    ],
    front: [
      { stack: "React", discription: "" },
      { stack: "React-Native", discription: "" },
      { stack: "React-Query", discription: "" },
      { stack: "Styled-Components", discription: "" },
    ],
    framWork: [{ stack: "Next.js", discription: "" }],
  };

  return result;
};
