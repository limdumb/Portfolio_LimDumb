interface ProjectDiscriptionType {
  title: string;
  type: "Team" | "Solo";
  contents: string;
  linkURL: string;
  timeline: string;
}

export const getProjectDiscription = () => {
  const result: ProjectDiscriptionType[] = [
    {
      timeline: "2022. 10",
      title: "Dodge.GG",
      type: "Team",
      contents:
        "기존 Op.gg와 다르게 원페이지 형식의 소환사 홈페이지를 만들고자 팀원들과 불편한점을 취합해서 그 부분들을 해소하고 더 빠른 정보확인이 가능한 서비스를 만들었습니다",
      linkURL: "http://dodge.gg.s3-website.ap-northeast-2.amazonaws.com/",
    },
    {
      timeline: "2023. 2",
      title: "NerdNest",
      type: "Team",
      contents:
      "Velog의 개발자 친화적인 블로깅과 GitHub의 잔디의 장점을 섞어서 하루하루 기록하는 재미를 느끼고 블로깅을 할 수 있게 동기를 줄 수 있는 서비스를 만들고자 둘을 결합해서 NerdNest라는 개발자 블로그를 만들었습니다.",
      linkURL: "http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/",
    },
    {
      timeline: "2023. 3",
      title: "HighEndy",
      type: "Solo",
      contents:
        "명품 제품을 카테고리별로 정렬 사용자는 그 제품을 얼마의 금액에 구매 했는지와 제품에 대한 본인의 의견을 토론 할 수 있게 리뷰를 남길수 있는 사이트를 만들었습니다. 사용자들끼리의 댓글을 통해 좀 더 제품에 대한 상세한 설명을 확인하고 실제 구매자의 말들을 들어서 제품의 신뢰를 더 높힐 수 있지않을까 라는 생각을 시작으로 서비스를 만들게 되었습니다",
      linkURL: "https://github.com/limdumb/HighEndy",
    },
    {
      timeline: "2023. 8",
      title: "Whail Chart",
      type: "Solo",
      contents:
        "여러개의 플랫폼의 차트 상황을 확인 하고 싶을때 각각의 차트를 확인하기 힘들다 보니 한눈에 볼 수 있는 페이지를 만들면 좋지않을까 라는 생각으로 시작했습니다. 각각의 차트순위를 확인하고 한시간 단위로 변경되는 정보를 통해서 이전시간과 순위변동이 어떻게 되었는지도 확인 할 수 있습니다.",
      linkURL: "https://github.com/limdumb/Whale-Chart-Client",
    },
    {
      timeline: "2023. 1",
      title: "라시에르",
      type: "Team",
      contents:
        "남성을 타겟으로한 화장품 구매 사이트 입니다. 본인 피부타입을 검사해서 어떤 타입인지 확인이 가능하고 그 결과에 따라 나에게 맞는 제품은 어떤 제품인지 Filter도 가능합니다. 장바구니부터 결제, 리뷰작성, 별점확인까지 가능합니다",
      linkURL: "http://seb41team02.s3-website.ap-northeast-2.amazonaws.com/",
    },
    {
      timeline: "2023. 11",
      title: "Branch",
      type: "Solo",
      contents:
        "서로간의 소통이 가능한 SNS 사이트 입니다. SNS에 기본적인 게시글,댓글,Profile 확인,친구신청,Message 등등이 가능한 서비스 입니다. 회원가입과 로그인을 제외한 실제 Contents의 구조는 SPA 형식이며 Next Js를 통해서 Route를 진행하여 페이지를 이동하는 느낌이 들지 않게 하는걸 중점으로 구성하여 결과물을 만들었습니다.",
      linkURL: "https://github.com/limdumb/SNS-Branch",
    },
  ];

  return result;
};
