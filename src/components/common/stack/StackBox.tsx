import Image from "next/image";
import styles from "./style/stackBox.module.css";
import JsIcon from "/public/javascript.svg";
import TsIcon from "/public/typescript.svg";
import StyledIcon from "/public/styledcomponents.svg";
import GitIcon from "/public/github.png";
import NextIcon from "/public/next.svg";
import ReactIcon from "/public/react.svg";
import NativeIcon from "/public/reactnative.svg";
import QueryIcon from "/public/reactquery.svg";

interface StackBoxProps {
  stack: string;
  discription: string;
}

interface StackIconProps {
  stack: string;
}

const StackImage = (props: StackIconProps) => {
  switch (props.stack) {
    case "JavaScript":
      return (
        <Image className={styles.Icon_Image} src={JsIcon} alt={props.stack} />
      );
    case "TypeScript":
      return (
        <Image className={styles.Icon_Image} src={TsIcon} alt={props.stack} />
      );
    case "Styled-Components":
      return (
        <Image
          className={styles.Icon_Image}
          src={StyledIcon}
          alt={props.stack}
        />
      );
    case "GitHub":
      return (
        <Image className={styles.Icon_Image} src={GitIcon} alt={props.stack} />
      );
    case "Next.js":
      return (
        <Image className={styles.Icon_Image} src={NextIcon} alt={props.stack} />
      );
    case "React":
      return (
        <Image
          className={styles.Icon_Image}
          src={ReactIcon}
          alt={props.stack}
        />
      );
    case "React-Native":
      return (
        <Image
          className={styles.Icon_Image}
          src={NativeIcon}
          alt={props.stack}
        />
      );
    case "React-Query":
      return (
        <Image
          className={styles.Icon_Image}
          src={QueryIcon}
          alt={props.stack}
        />
      );
  }
};

export default function StackBox(props: StackBoxProps) {
  return (
    <div className={styles.Stack_Container}>
      <div className={styles.Image_Container}>
        {<StackImage stack={props.stack} />}
      </div>
      <h5 className={styles.Stack_Title}>{props.stack}</h5>
      <span className={styles.Stack_Discription}>{props.discription}</span>
    </div>
  );
}
