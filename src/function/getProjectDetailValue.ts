export default function getProjectDetailValue({ id }: { id: string }) {
  switch (id) {
    case "1":
      return {
        name: "Dodge.GG",
        type: "3인 Team Project",
        github: "https://github.com/limdumb/DodGe.gg",
        url: "http://dodge.gg.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "React",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
        ],
        contribution: {
          features: [
            "챔피언 리스트",
            "챔피언 검색",
            "챔피언 정보 상세보기",
            "챔피언 추천 정보노출",
            "챔피언 Tab Filter",
            "데이터 크롤링",
            "Op 챔피언",
            "Op 챔피언 Filter",
            "소환사 검색",
            "소환사 랭크 정보",
            "소환사 전적 정보",
            "모바일 View Navigation Button",
          ],
          creates: [
            "챔피언 리스트",
            "챔피언 검색",
            "소환사 검색",
            "소환사 랭크 정보",
            "소환사 전적 정보",
          ],
          percentage: "55%",
          discription:
            "총 12개의 세부기능중 5개의 기능을 구현 했습니다. 기능에 대한 기여율은 41%에 해당합니다. 나머지 14%는 프로젝트의 데드라인 관리 및 API의 전반적 분석을 주도하여 진행하였고 코드리뷰와 미니 해커톤 진행의견등으로 나머지 14%를 기여 했습니다.",
        },
      };
    case "2":
      return {
        name: "라시에르",
        type: "6인 Team Project(부트캠프 Main Project)",
        github: "https://github.com/codestates-seb/seb41_main_002",
        url: "http://seb41team02.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
        ],
        contribution: {
          features: [
            "OAuth 페이지",
            "Home 메인페이지",
            "상품 리스트 페이지",
            "상품 상세페이지",
            "내정보 페이지",
            "결제페이지",
            "장바구니 페이지",
            "피부타입 검사 페이지",
            "내정보 수정페이지",
          ],
          creates: [
            "상품 리스트 페이지",
            "상품 상세페이지",
            "장바구니 페이지",
            "피부타입 검사 페이지",
          ],
          percentage: "60%",
          discription:
            "총 9개의 페이지중 4개의 페이지를 구현 하였습니다. 기능에 대한 기여율은 44%에 해당합니다. 나머지 16%는 백엔드와의 협업이기 때문에 전체 팀에대한 규칙 및 서로 의견을 낼 수 있는 분위기를 조성하였고, 코드리뷰와 일정에 대한 조율, 개발 이외의 것들을 전부 맡아서 프로젝트를 진행했습니다. 그래서 개발 이외의 부분에서 16%를 기여했습니다.",
        },
      };
    case "3":
      return {
        name: "NerdNest",
        type: "4인 Team Project",
        github: "https://github.com/limdumb/NerdNest_FE",
        url: "http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
          "Toast UI",
        ],
        contribution: {
          features: [
            "Auth 페이지",
            "로그인 기능",
            "회원가입 기능",
            "로그아웃 기능",
            "OAuth 로그인 기능",
            "OAuth 회원가입 기능",
            "블로그 리스트",
            "카테고리 기능",
            "블로그 CRUD",
            "유저 프로필 수정기능",
            "이미지 업로드기능",
            "메인페이지",
            "블로그 상세페이지",
            "블로그 댓글 작성",
            "검색페이지",
            "블로그 기록기능",
            "공용 컴포넌트 구현",
          ],
          creates: [
            "Auth 페이지",
            "로그인 기능",
            "회원가입 기능",
            "로그아웃 기능",
            "OAuth 로그인 기능",
            "OAuth 회원가입 기능",
            "블로그 리스트 페이지",
            "카테고리 기능",
            "블로그 CRUD",
            "이미지 업로드 기능",
            "유저 프로필 수정 기능",
            "공용 컴포넌트 구현",
          ],
          percentage: "80%",
          discription:
            "17개의 페이지 및 기능중 12개를 구현했고 기능에 대한 기여도는 70% 입니다. 그외 팀장으로써 팀원을 모으는것 부터 규칙 및 팀을 리드하는것과 의견조율 및 코드리뷰 및 최종배포 전 통합 테스트등으로 나머지 10%를 기여했습니다.",
        },
      };
    case "4":
      return {
        name: "HighEndy",
        type: "Solo Project",
        github: "https://github.com/limdumb/HighEndy",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Styled-Components",
          "React-Route-Dom",
          "Axios",
          "JSON Server",
        ],
      };
    case "5":
      return {
        name: "Whale-Chart",
        type: "Solo Project",
        github: "https://github.com/limdumb/Whale-Chart-Client",
        url: "",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Styled-Components",
          "React-Route-Dom",
          "Axios",
          "React-Query",
        ],
      };
  }
  return {};
}
