import SectionTitle from "@/components/ui/Section/SectionHeading/SectionTitle";
import Image from "next/image";
import { FC } from "react";
import styles from "./Links.module.scss";

const Links: FC = () => {
  return (
    <section className={styles.linksSection}>
      {/* <SectionTitle title="Links" /> */}
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <a target="_blank" href="https://github.com/ArthurBosch">
            <Image
              alt="Link - github"
              src={"./icons/github.svg"}
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a target="_blank" href="https://t.me/champagneboi">
            <Image
              alt="Link - telegram"
              src={"./icons/telegram.svg"}
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arthur-bosch-dev/"
          >
            <Image
              alt="Link - linkedin"
              src={"./icons/linkedin.svg"}
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a
            target="_blank"
            href="mailto:mr.bolshakov12@gmail.com&subject=mail through portfolio site"
          >
            <Image
              alt="Link - email"
              src={"./icons/email.svg"}
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Links;
