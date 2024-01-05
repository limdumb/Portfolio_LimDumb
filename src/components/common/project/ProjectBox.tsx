import styled from "styled-components";
import styles from "./style/projectBox.module.css";
import Link from "next/link";

interface ProjectBoxProps {
  timeline: string;
  title: string;
  category: string;
  information: string;
  detailNav: string;
}

const BoxContainer = styled.div`
  min-height: 15%;
  width: 100%;
  display: flex;

  margin-bottom: 20px;
  @media screen and (max-width: 760px) {
    & {
      flex-direction: column;
      border-bottom: 1px solid rgb(116 116 116 / 15%);
      padding-bottom: 20px;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1199px) {
    & {
    }
  }
`;

export default function ProjectBox(props: ProjectBoxProps) {
  return (
    <BoxContainer className={styles.Box_Container}>
      <div className={styles.Project_Time_Line_Wrapper}>
        <span className={styles.Project_Time_Line}>{props.timeline}</span>
      </div>
      <div className={styles.Title_Wrapper}>
        <div>
          <h5 className={styles.Project_Title}>{props.title}</h5>
          <p className={styles.Project_Information}>{props.category}</p>
        </div>
      </div>
      <div className={styles.Detaile_Wrapper}>
        <div className={styles.Information_Wrapper}>
          <span>{props.information}</span>
          <Link href={`${props.detailNav}`} className={styles.Link_Buttin}>
            상세보기
          </Link>
        </div>
      </div>
    </BoxContainer>
  );
}
