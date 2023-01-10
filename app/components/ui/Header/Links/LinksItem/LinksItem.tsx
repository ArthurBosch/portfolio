import Image from "next/image";
import { FC } from "react";
import styles from "../Links.module.scss";

const LinksItem: FC<{ image: string; link: string }> = ({ image, link }) => {
  return (
    <div className={styles.link}>
      <a target="_blank" href={link}>
        <Image src={image} alt={link} height={36} width={36} />
      </a>
    </div>
  );
};

export default LinksItem;
