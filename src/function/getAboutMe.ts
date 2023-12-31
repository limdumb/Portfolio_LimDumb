interface AboutMeResultType {
  title: string;
  contents: string;
}

export const getAboutMe = () => {
  const result: AboutMeResultType[] = [
    {
      title: "Dior",
      contents:
        "디올은 대한민국에서 매출이 급성장한 브랜드 중 하나이다. 과거에는 유독 비슷한 포지션의 브랜드들이나 전세계적으로 센세이션을 일으킨 DIOR HOMME의 명성에 비해 한국에서는 인기가 다소 떨어지는 편이었다.[9] 그러나 2020년대 들어서 LVMH의 경영 방식 변화와 지수, 수지, 방탄소년단 등 인기 연예인들을 통한 캠페인, 인스타그램 등을 이용한 홍보 활동, 디올 멘도 킴 존스의 공격적인 콜라보레이션과 스트릿지향적인 디자인이 먹혀 들면서 한국 매출이 폭발적으로 증가했다.      ",
    },
    {
      title: "Louis Vuitton",
      contents:
        "루이 비통은 오랜 기간 동안 명품 브랜드 중에서도 대명사 격으로 취급되어 온 브랜드이다. 2022년 브랜드디렉토리 기준 세계 명품 패션 브랜드 가치 순위에서 1위를 유지하고 있으며[5] 시계, 보석, 의류, 잡화 등 모든 카테고리를 통틀어도 단일 명품 브랜드 중에서 가장 높은 매출을 올리고 있다. 수 많은 명품 브랜드들이 포진되어 있는 LVMH 그룹의 최상위 브랜드로 포지셔닝 되었고, LVMH 그룹 매출의 절반 이상을 혼자 책임지고 있다.",
    },
    {
      title: "Cartier",
      contents:
        "시계 매장은 비교적 많은 편이지만, 보석까지 함께 판매하는 정식 매장은 매우 적다. 3대 명품 중 하나인 루이 비통 보다 매장 수가 훨씬 적을 정도로 매장이 많지 않으며, 입점기준 또한 까다롭다.[5] 귀금속 업계에서 까르띠에의 위상을 생각하면, 입점 기준이 그만큼 높다고 볼수도 있다. 전라도과 충청도엔 아직 매장이 없으며, 과거에는 대백프라자에도 매장이 있었다. 하지만 현대백화점 대구점이 개점하면서 매장을 철수했고, 현대 대구점은 22년 3월에 철수했다.",
    },
    {
      title: "BVLGARI",
      contents:
        "롤렉스나 까르띠에만큼은 아니지만 세계 10대 보석 브랜드답게 매출액이 높은 우량점포가 아니면 매장을 잘 안내주는 편이다. 현대백화점의 매출 2위 매장인 현대백화점 무역센터점이나 신세계백화점 본점에도 입점을 하지 않을 정도로 콧대가 높은 브랜드이며 국내 매장 총량제는 18개이다.",
    },
  ];

  return result;
};
