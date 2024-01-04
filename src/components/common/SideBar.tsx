import getCategory from "@/function/getCategory";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../Footer";

interface SideBarType {
  toggleModal: () => void;
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #101010;
  height: 100vh;
  width: 25vh;
  position: fixed;
  z-index: 50;
  bottom: 0px;
  right: 0px;
  padding: 65px 30px;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ccc;

  & > p {
    font-size: 6px;
    font-weight: 600;
    color: rgb(204, 204, 204);
    position: fixed;
    bottom: 20px;
  }
`;

const ModalBackground = styled.div`
  width: 50vh;
  height: 100vh;
  position: fixed;
  z-index: 35;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

const MenuList = styled.ul`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function SideBar(props: SideBarType) {
  const categoryArray = getCategory();

  return (
    <>
      <ModalContainer>
        <MenuList>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {categoryArray.map((el) => {
            return (
              <li key={el.category}>
                <Link href={`/${el.category}`}>{el.viewValue}</Link>
              </li>
            );
          })}
        </MenuList>
        <p>
          © 2023 Eddie Portfolio
          <br />
          Copyright 2023 All rights reserved
        </p>
      </ModalContainer>
      <ModalBackground onClick={() => props.toggleModal()} />
    </>
  );
}
