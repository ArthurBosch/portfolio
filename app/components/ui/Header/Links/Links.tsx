import { FC } from "react";
import styles from "./Links.module.scss";
import github from "@/assets/icons/github.svg";
import telegram from "@/assets/icons/telegram.svg";
import mail from "@/assets/icons/email.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import LinksItem from "./LinksItem/LinksItem";

const Links: FC = () => {
  return (
    <ul className={styles.links}>
      <LinksItem
        image={mail}
        link="mailto:mr.bolshakov12@gmail.com&subject=mail through portfolio site"
      />
      <LinksItem image={github} link="https://github.com/ArthurBosch" />
      <LinksItem image={telegram} link="https://t.me/champagneboi" />
      <LinksItem image={linkedin} link="" />
    </ul>
  );
};

export default Links;
