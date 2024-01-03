import styled from "styled-components";
import styles from "./style/projectBox.module.css";

interface ProjectBoxProps {
  timeline: string;
  title: string;
  category: string;
  information: string;
  detailNav: string;
}

const BoxContainer = styled.div`
  min-height: 50%;
  width: 100%;
  display: flex;

  @media screen and (max-width: 760px) {
    & {
      flex-direction: column;
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
          <h5>{props.title}</h5>
          <p style={{ color: "#2F2F2F", opacity: "0.4", fontSize: "14px" }}>
            {props.category}
          </p>
        </div>
      </div>
      <div className={styles.Detaile_Wrapper}>
        <div className={styles.Information_Wrapper}>
          <span>{props.information}</span>
          <button className={styles.Link_Buttin}>하이</button>
        </div>
      </div>
    </BoxContainer>
  );
}

// 16.6% , 25% , 50(margin 8.4)