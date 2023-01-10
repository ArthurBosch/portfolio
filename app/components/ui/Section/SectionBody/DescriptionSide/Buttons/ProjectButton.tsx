import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./ProjectButtons.module.scss";
const ProjectButton: FC<{ title: string; icon: string; href: string }> = ({
  title,
  icon,
  href,
}) => {
  return (
    <button className={styles.button}>
      <Link href={href}>{title}</Link>
      <Image src={`/icons/${icon}.svg`} alt="icon" width={34} height={34} />
    </button>
  );
};

export default ProjectButton;
