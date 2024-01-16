export default function getProjectDetailValue({ id }: { id: string }) {
  switch (id) {
    case "1":
      return {
        name: "Dodge.GG",
        type:"Team Project",
        gifUrl: "",
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
        features: [
          {
            feature: "소환사 전적 및 정보 검색기능",
            discription:
              "검색하게 되면 게임의 종류별로 전적 확인이 가능합니다. KDA, Play 챔피언, 같이 Play 한 User정보등이 확인 가능하며 최근 10판의 전적도 Filter 해서 게임의 종류별로 확인 할 수 있습니다. 그리고 User의 솔로랭크, 자유랭크 Tier 정보등을 확인 할 수 있는 기능입니다.  ",
          },
          {
            feature: "Champion List",
            discription:
              "전체 챔피언, 라인별 챔피언, 로테이션 정보를 볼 수 있습니다. Click하게 되면 챔피언 상세보기로 넘어갈 수 있도록 Event 처리를 진행 하였습니다.",
          },
        ],
      };
    case "2":
      return {
        name: "라시에르",
        type:"Team Project",
        gifUrl: "",
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
        features: [
          {
            feature: "제품 상세 페이지 구현",
            discription:
              "제품의 상세정보를 확인 가능한 페이지입니다. 제품의 전반적인 정보를 얻을 수 있고 즉시 구매를 할 수 있고 장바구니에도 추가가 가능하도록 구현하였습니다. 제품의 사용후기를 확인 할 수 있고 내가 작성한 사용후기에 한해서 삭제와 수정을 할 수 있는 기능을 구현하였습니다.",
          },
          {
            feature: "장바구니 기능 구현",
            discription:
              "어떤 제품을 장바구니에 넣었는지 확인 할 수 있는 페이지 입니다. 담아둔 제품의 수량을 변경 할 수 있고 장바구니에서 제품을 삭제할 수 있습니다. 그리고 제품의 가격과 배송비를 포함한 총 금액을 수량변경이나 삭제에 맞춰 실시간 확인이 가능하고 적립금, 구독여부 확인등을 할 수 있습니다. 그리고 구매 페이지로 넘어 갈 수 있습니다.",
          },
          {
            feature: "Skin Type Test 기능 구현",
            discription:
              "커스텀 제품 조회 기능을 위한 피부타입 검사 기능을 구현했습니다. 간단한 설문조사의 검사이고 끝나면 결과 확인 후 제품을 볼 수 있도록 Navigate 기능을 구현 하였습니다.",
          },
          {
            feature: "Product List 구현",
            discription:
              "제품의 정보를 담고있는 컴포넌트를 구현하였고 데이터에 맞춰 List 형식으로 View를 구현 하였습니다. Click하게 되면 제품 상세페이지로 이동이 가능하고 무한스크롤을 통해 제품정보를 이어 볼 수 있습니다. 그리고 제품별로 Filter가 가능하고 피부타입 검사가 되어있다면 Custom 버튼을 누르게 되면 해당 정보가 담긴 제품들을 카테고리별로 Filter해서 볼 수 있는 기능을 구현하였습니다.",
          },
        ],
      };
    case "3":
      return {
        name: "NerdNest",
        type:"Team Project",
        gifUrl: "",
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
        features: [
          {
            feature: "Blog 작성 및 수정기능 구현",
            discription:
              "작성 Editor는 Toast UI를 사용하였고 Blog의 Title 이미지를 등록 할 수 있고, 어떠한 카테고리에 지정하여 글을 작성 할것인지를 선택 할 수 있는 기능이 있습니다. 수정을 하게되면 기존 정보가 그대로 불러와지며 원하는 부분만 수정이 가능합니다.",
          },
          {
            feature: "개인 Blog Page 구현",
            discription:
              "해당 페이지는 블로그 주인의 Profile, Blog 작성기록과 카테고리별 작성한 블로그 글을 확인 할 수 있습니다. 만약 Blog 주인이라면 Profile 수정 및 카테고리 생성, 삭제, 수정등이 가능합니다.",
          },
          {
            feature: "Auth 기능",
            discription:
              "기본적인 회원가입 및 로그인, OAuth 회원가입 및 로그인, 로그아웃, 토큰 만료시 재발급 기능등을 구현 하였습니다.",
          },
        ],
      };
    case "4":
      return {
        name: "HighEndy",
        type:"Solo Project",
        gifUrl: "",
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
        features: [
          {
            feature: "제품 상세 페이지",
            discription:
              "제품의 공식 홈페이지 가격, 제품의 기본적 정보, 공식 홈페이지로 들어 갈 수 있는 Link가 제공됩니다. 제품에 대한 구매 후기를 작성 할 수 있고 본인이 구매한 금액과 구매 하였던 경험에 대한걸 작성 할 수있습니다.",
          },
          {
            feature: "제품 List 페이지",
            discription:
              "브랜드별 제품을 확인 할 수 있고 Click하면 제품의 상세 페이지로 이동 될 수 있도록 구현 하였습니다. Aside Bar Tab을 통해 브랜드별 Filter가 가능하도록 구현했고 이달의 Top 10 제품도 List형식으로 확인 할 수 있습니다.",
          },
          {
            feature: "회원가입/로그인 기능",
            discription:
              "제품후기 작성을 위해서는 Login이 가능해야 하기 떄문에 기본 Login, Sign Up 기능을 만들었습니다. JSON Server를 통해 간단하게 구현하였습니다.",
          },
        ],
      };
    case "5":
      return {
        name: "Whale-Chart",
        type:"Solo Project",
        gifUrl: "",
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
        features: [
          {
            feature: "플랫폼별 일간 차트 구현",
            discription:
              "플랫폼별로 일간차트 정보를 확인 할 수 있습니다. 그리고 날짜의 값을 입력받아 해당하는 날짜의 일간차트 정보를 받아 올 수 있습니다.",
          },
          {
            feature: "음원 사이트별 실시간 차트",
            discription:
              "플랫폼별로 1시간 단위로 갱신되는 실시간 차트를 한눈에 볼 수 있습니다. Page Nation으로 원하는 순위권의 음악 차트를 10개씩 볼 수 있습니다.",
          },
        ],
      };
  }
  return {};
}
