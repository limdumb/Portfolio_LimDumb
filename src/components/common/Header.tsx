import getCategory, { CategoryType } from "@/function/getCategory";
import styles from "./style/header.module.css";
import Link from "next/link";

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

export default function Header() {
  const headerCategory = getCategory();

  return (
    <header className={styles.Header_Container}>
      <div className={styles.Logo_Container}>LGI Protfolio</div>
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
    </header>
  );
}
