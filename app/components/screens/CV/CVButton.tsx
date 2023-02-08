import Link from "next/link";
import { FC } from "react";
import styles from "./CVSection.module.scss";

const CVButton: FC<{
  title: string;
  href: string;
  className: string;
}> = ({ title, href, className }) => {
  return (
    <button className={className}>
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default CVButton;
