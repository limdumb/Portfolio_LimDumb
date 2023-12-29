import Footer from "@/components/Footer";
import Header from "../Header";
import { ContentsContainer, MainContainer } from "@/app/page";
import styles from "./style/aboutMe.module.css";
import ContentsBox from "./ContentsBox";

export default function AboutMe() {
  return (
    <MainContainer category="aboutme">
      <Header />
      <ContentsContainer>
        <div>
          <h1 style={{ marginBottom: "40px" }}>About Me</h1>
          <div className={styles.Info_Contents_Wrapper}>
            <ContentsBox />
            <ContentsBox />
            <ContentsBox />
            <ContentsBox />
          </div>
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
