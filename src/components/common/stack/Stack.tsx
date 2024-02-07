"use client";

import Header from "../Header";
import styles from "./style/stack.module.css";
import StackBox from "./StackBox";
import { ContentsContainer, MainContainer } from "../project/Project";
import { useState } from "react";
import SideBar from "../SideBar";
import { getStackValue } from "@/function/getStackValue";

export default function Stack() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const stackValue = getStackValue();

  return (
    <MainContainer category="stack">
      {modalOpen ? <SideBar toggleModal={toggleModal} /> : null}
      <Header category="stack" toggleModal={toggleModal} />
      <ContentsContainer>
        <h1 className={styles.Intro_Title}>Stack</h1>
        <div className={styles.Stack_Box_Container}>
          <h3 className={styles.Stack_Title}>Language</h3>
          <div className={styles.Stack_Box_Wrapper}>
            {stackValue.language.map((el) => {
              return (
                <div key={el.stack} className={styles.Stack_Box_Contents}>
                  <StackBox stack={el.stack} discription={el.discription} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.Stack_Box_Container}>
          <h3 className={styles.Stack_Title}>Front</h3>
          <div className={styles.Stack_Box_Wrapper}>
            {stackValue.front.map((el) => {
              return (
                <div key={el.stack} className={styles.Stack_Box_Contents}>
                  <StackBox stack={el.stack} discription={el.discription} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.Stack_Box_Container}>
          <h3 className={styles.Stack_Title}>FramWork</h3>
          <div className={styles.Stack_Box_Wrapper}>
            {stackValue.framWork.map((el) => {
              return (
                <div key={el.stack} className={styles.Stack_Box_Contents}>
                  <StackBox stack={el.stack} discription={el.discription} />
                </div>
              );
            })}
          </div>
        </div>
      </ContentsContainer>
    </MainContainer>
  );
}
