import Image from "next/image";
import champSearch from "/public/챔피언검색.gif";
import summonerSerch from "/public/소환사검색.gif";
import champList from "/public/챔피언리스트.gif";
import clickNavigate from "/public/ClickEvent.gif";
import productList from "/public/productList.gif";
import productDetaile from "/public/productDetaile.gif";
import typeTest from "/public/타입검사.gif";
import proudctCart from "/public/장바구니.gif";
import blogEdit from "/public/blogedit.gif";
import blogwrite from "/public/blogwrite.gif";
import category from "/public/category.gif";
import logout from "/public/logout.gif";
import OAuthLogin from "/public/OAuthLogin.gif";
import profile from "/public/profile.gif";
import signup from "/public/signup.gif";
import homeGif from "/public/homeGif.gif";
import loginLimit from "/public/로그인제한.gif";
import reviewGif from "/public/리뷰 작성 수정 삭제.gif";
import productSearch from "/public/상품검색.gif";
import highendyList from "/public/제품리스트.gif";
import highendySignup from "/public/회원가입.gif";
import calinder from "/public/calinder.gif";
import chartCategory from "/public/chartCategory.gif";
import chartList from "/public/chartList.gif";
import styles from "./style/projectBox.module.css";

export const GIFImage = ({ id }: { id: string }) => {
  switch (id) {
    case "1":
      return [
        {
          gif: (
            <Image
              key={id}
              src={summonerSerch}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Summoner Search",
          discription:
            "검색한 소환사의 랭크정보, 최근 10판에 대한 게임 전적, 해당 게임에서 Play헀던 캐릭터및 템 정보 등과 같은 전반적 데이터를 확인 할 수 있습니다. 소소한 이벤트성으로 LOL의 혹시 알고 계셨나요?를 만들어봤습니다. Riot API를 가공해서 전적을 가져오기 위한 정보를 추출후 전적 정보를 얻어냈고 그 안에서 필요한 데이터만 추출해서 사용했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={champList}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Champ List",
          discription:
            "Riot API를 활용해서 사용 할 수 있는 배열로 만들었고 이미지 노출에 필요한 데이터가 다르기 때문에 US데이터와 KR데이터를 따로 추출해서 사용 하였습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={champSearch}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Champ Search",
          discription:
            "이미 받아져온 데이터를 토대로 검색을 진행하고 한글 유니코드를 분석해서 검사하는 함수를 만들었습니다. 초성검색, 혹은 검색한 글자를 포함하는 모든 챔피언 데이터를 불러옵니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={clickNavigate}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Click Navigate",
          discription:
            "챔피언의 초상화를 Click하면 간단하게 해당 챔피언의 정보들을 얻을 수 있는 페이지가 열리도록 이동하는 기능을 구현하였습니다.",
        },
      ];
    case "2":
      return [
        {
          gif: (
            <Image
              key={id}
              src={productList}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Product List",
          discription:
            "제품 리스트는 무한스크롤을 적용해서 확인 할 수 있습니다. Filter는 URL의 Query Params를 추적하여 데이터를 요청 할 수 있게 구현했습니다. 그리고 검색기능은 해당 단어가 있는 제품만 데이터로 받을 수 있게 설계 하였습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={proudctCart}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "장바구니",
          discription:
            "장바구니에 담겨있는 제품의 삭제, 개수의 수정, 구매 페이지로 이동까지 가능합니다. 실시간으로 데이터를 조정하여 장바구니의 상품의 상태값의 변경이 있을때마다 가격이 즉시 변동되어 확인이 가능하게 만들었습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={productDetaile}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "제품상세 페이지",
          discription:
            "제품의 전반적 정보를 확인 할 수 있고 추천타입을 확인 할 수 있습니다. 구매하기위한 수량 확인이 가능하고 제품의 사용후기를 볼 수 있습니다. 만약 로그인 되어있는 유저가 작성한 후기라면 삭제나 수정도 가능합니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={typeTest}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "피부타입 테스트 페이지",
          discription:
            "피부 타입을 검사 할 수 있는 페이지이고 선택하는 정보가 계정에 저장되면서 제품 리스트에서 커스텀 버튼을 눌러 본인에게 맞는 피부타입의 제품들만 볼 수 있게 만들었습니다.",
        },
      ];
    case "3":
      return [
        {
          gif: (
            <Image
              key={id}
              src={blogwrite}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "블로그 작성",
          discription:
            "블로그의 Title Image를 업로드 할 수 있습니다. 이미지는 JPG 확장자 이외에는 등록이 되지않게 설정했습니다. 그리고 제목과 내용을 입력 후 생성한 카테고리를 설정해서 게시글을 올릴 수 있습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={blogEdit}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "블로그 수정",
          discription:
            "작성과 전반적 기능이 같습니다. 수정을 누르면 이전에 입력되어있던 정보들을 받아 올 수 있습니다. GIF상 이미지가 안받아와지는 이유는 현재 배포되어있는 서버의 Error로 판단됩니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={category}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Category",
          discription:
            "카테고리의 CRUD가 가능합니다. 카테고리가 삭제되더라도 안에 내용의 게시글은 삭제되지 않고 생성,수정,삭제 모두 즉시적으로 반영 될 수있도록 만들었습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={OAuthLogin}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "OAuth Login",
          discription:
            "OAuth 로그인 기능입니다. Page로 리다이렉트 시킨 후 해당 URL Query를 백엔드로 보내주는것 까지 구현하였고 그 뒤에 백엔드의 응답결과값을 받은후 즉시 로그인 되도록 구현했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={logout}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "로그아웃",
          discription:
            "간단한 로그아웃 기능입니다. 로그인 정보는 로컬스토리지에 저장되어 있고 해당 정보를 삭제하게끔 구현 했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={signup}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "회원가입",
          discription:
            "기본적인 Validation은 모두 적용 되어있는 상태입니다. 모든 검증을 통과하지 않으면 회우너가입 버튼이 눌리지 않습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={profile}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Profile",
          discription:
            "프로필의 수정기능 입니다. 중복된 닉네임을 입력시 에러가 발생되고 수정이 완료되지않게 구현 하였습니다. 닉네임과 자기소개, 사진까지 수정이 가능합니다. 해당 GIF에서 수정이 되지않는 이유는 현재 배포되어있는 서버S3에서 이미지 에러가 발생되어서 수정이 되지않습니다. 하지만 Value자체는 수정되는것을 이전 확인했습니다.",
        },
      ];
    case "4":
      return [
        {
          gif: (
            <Image
              key={id}
              src={homeGif}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Home",
          discription:
            "캐러셀 컴포넌트를 사용해서 메인 베너를 만들었고 그 외에 이달의 패션소식을 하단에 배치해서 구현했습니다. 헤더는 즉시 Navigate 되게 하기위해 Route의 Link컴포넌트를 사용해서 구현했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={highendyList}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Product List",
          discription:
            "제품리스트는 브랜드별로 쿼리를 만들었습니다. JSON Server의 Route 설정으로 브랜드별 Query를 받아서 해당 데이터를 요청시 Response 줄 수 있도록 구현했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={productSearch}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Product Search",
          discription:
            "제품 검색은 단어별로 해당하는 단어를 요청해서 데이터로 받아오는 형식으로 구현했습니다. 어떤 단어로 검색했는지, 그리고 검색한 단어가 들어간 제품의 개수는 몇개인지 노출합니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={reviewGif}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "리뷰 작성",
          discription:
            "제품의 구매경험을 작성합니다. 구입한 금액과 내용을 적고 등록 할 수 있습니다. 등록된 리뷰는 수정과 삭제가 가능합니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={loginLimit}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "Login 제한",
          discription:
            "로그인이 되어있지 않다면 제품에 댓글을 달 수 없도록 예외처리를 진행했습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={highendySignup}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "회원가입",
          discription:
            "간단한 회원가입 기능입니다. 기초적인 Validate 설정이 되어있고 해당하는 부분이 충족되지 않으면 회원가입이 되지 않습니다.",
        },
      ];
    case "5":
      return [
        {
          gif: (
            <Image
              key={id}
              src={chartList}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "실시간 차트 모아보기",
          discription:
            "각 플랫폼별 실시간 차트를 모아 볼 수 있습니다. 한눈에 확인이 가능하고 1시간 단위로 갱신이 되는 차트를 확인 할 수 있습니다. 가이섬 차트의 API를 사용해서 5개의 API를 불러와 노출하였습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={calinder}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "일간차트",
          discription:
            "플랫폼별 일간차트를 볼 수 있습니다. 직접 만든 캘린더 컴포넌트를 통해서 일자별 선택이 가능하고 확인을 누르게되면 해당 플랫폼의 선택한 날짜의 일간차트를 확인 할 수 있습니다.",
        },
        {
          gif: (
            <Image
              key={id}
              src={chartCategory}
              alt="gif"
              className={styles.GIF_Image}
            />
          ),
          title: "카테고리별 차트",
          discription:
            "레이아웃은 Header와 AsideBar는 고정되게 만들고 Click시 Contents만 변경되도록 구성하였고 기본적인 Tab Navigation을 구현했습니다.",
        },
      ];
  }
};
