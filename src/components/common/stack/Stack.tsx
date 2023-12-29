import { ContentsContainer, MainContainer } from "@/app/page";
import Header from "../Header";
import Footer from "@/components/Footer";
import styles from "./style/stack.module.css";
import StackBox from "./StackBox";

export default function Stack() {
  return (
    <MainContainer category="stack">
      <Header />
      <ContentsContainer>
        <div>
          <h1 className={styles.Intro_Title}>Stack</h1>
          <StackBox />
          <StackBox />
          <StackBox />
          <StackBox />
        </div>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}
