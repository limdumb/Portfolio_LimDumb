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
          "JavaScript의 Event 처리가 가능하고 고차함수 및 문법들로 코드작성이 가능합니다.",
      },
      {
        stack: "TypeScript",
        discription:
          "interface 및 기본적인 Type을 사용 할 수 있고 제네릭타입과 Data를 받아오는 Type을 사용하는데 무리가 없습니다.",
      },
    ],
    front: [
      {
        stack: "React",
        discription:
          "React로 지금까지 프로젝트를 진행하였습니다. useState의 상태관리 및 실시간으로 변경되는 UI 설계가 가능하고 customHook을 만들어서 사용해본 경험들이 있습니다.",
      },
      {
        stack: "React-Native",
        discription:
          "React Native로 간단한 프로젝트를 진행한 적 있습니다. 기초적인 문법 및 UI 설계가 가능합니다.",
      },
      {
        stack: "React-Query",
        discription:
          "Query로 데이터를 조회할수 있고 기초적으로 Data를 받아오는 작업을 진행해본적이 있습니다.",
      },
      {
        stack: "Styled-Components",
        discription:
          "Props를 받아 조건부 Styling을 하는데 무리가 없고 TypeScript를 같이 사용한 Type지정과 반응형 UI 코드를 작성할 수 있습니다.",
      },
      {
        stack: "Recoil",
        discription:
          "전역 상태 관리가 왜 필요한지 알고있고, Atom의 값을 Selector 함수를 작성해서 핸들링 할 수 있습니다.",
      },
    ],
    framWork: [
      {
        stack: "Next.js",
        discription:
          "Portfolio를 만들었습니다. 디렉토리 구조 및 id를 사용해서 개별페이지를 만들고 Route 및 SSR의 웹설계가 가능합니다.",
      },
    ],
  };

  return result;
};
