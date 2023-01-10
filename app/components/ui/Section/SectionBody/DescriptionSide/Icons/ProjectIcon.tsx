import Image from "next/image";
import { FC } from "react";
import styles from "./ProjectIcon.module.scss";
import cn from "classnames";

const ProjectIcon: FC<{ icon: string; className?: string }> = ({
  icon,
  className,
}) => {
  return (
    <div className={cn(styles.imgContainer, className)}>
      <Image
        src={`/icons/${icon}.svg`}
        alt={`Tech Icon - ${icon}`}
        height={64}
        width={icon === "Express" ? 128 : 64}
      />
      <h3>{icon}</h3>
    </div>
  );
};

export default ProjectIcon;
