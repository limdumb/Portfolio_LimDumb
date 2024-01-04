import getCategory, { CategoryType } from "@/function/getCategory";
import styles from "./style/header.module.css";
import Link from "next/link";
import styled from "styled-components";
import { IoMenuSharp } from "react-icons/io5";

interface HeaderContainerPropsType {
  category: "aboutme" | "project" | "record" | "stack" | "home";
}

interface HeaderPropsType extends HeaderContainerPropsType {
  toggleModal: () => void;
}

const HeaderContainer = styled.header<HeaderContainerPropsType>`
  background-color: ${(props) =>
    props.category === "aboutme"
      ? "#FFFFFF"
      : props.category === "project"
      ? "#FFFFFF"
      : props.category === "stack"
      ? "#EEEEEE"
      : props.category === "record"
      ? "#2F2F2F"
      : "#00A564"};
  position: fixed;
  z-index: 10;
  height: 93px;
  width: 100%;
  top: 0px;
  color: ${(props) =>
    props.category === "aboutme"
      ? "#2F2F2F"
      : props.category === "project"
      ? "#2F2F2F"
      : props.category === "stack"
      ? "white"
      : props.category === "record"
      ? "white"
      : "rgba(255, 255, 255, 0.52)"};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3.75rem;

  @media screen and (max-width: 760px) {
    & {
      padding: 0px 25px;
    }
  }
`;

const HeaderNavigateButton = ({
  category,
  viewValue,
}: CategoryType): JSX.Element => {
  return (
    <Link className={styles.Link_Button} href={`/${category}`}>
      {viewValue}
    </Link>
  );
};

export default function Header(props: HeaderPropsType) {
  const headerCategory = getCategory();

  return (
    <HeaderContainer category={props.category}>
      <div className={styles.Logo_Container}>
        <Link href={"/"}>LGI Protfolio</Link>
      </div>
      <div className={styles.Button_Container}>
        {headerCategory.map((el) => {
          return (
            <div className={styles.Button_Wrapper} key={el.category}>
              <HeaderNavigateButton
                category={el.category}
                viewValue={el.viewValue}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.Bugger_Icon_Container}>
        <IoMenuSharp size={"23px"} onClick={() => props.toggleModal()} />
      </div>
    </HeaderContainer>
  );
}
