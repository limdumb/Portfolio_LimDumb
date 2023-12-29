import styles from "./style/stackBox.module.css";

interface StackBoxProps {
  title: string;
  stack: string;
}

export default function StackBox() {
  return (
    <div className={styles.Stack_Container}>
      <h2 className={styles.Stack_Title}>Front</h2>
      <div>
        <h3>JS, TS, React,React Native, React Query</h3>
      </div>
    </div>
  );
}
