import { FC } from "react";
import ProjectIcon from "./ProjectIcon";
import styles from "./ProjectIcon.module.scss";

const ProjectIcons: FC<{ icons: Array<string[] | string> }> = ({ icons }) => {
  return (
    <div className={styles.iconsContainer}>
      <>
        {icons.map((icon) => {
          if (typeof icon === "string") {
            return <ProjectIcon icon={icon} key={icon} />;
          }

          return icon.map((i) => {
            <ProjectIcon icon={i} className={"ml-10"} key={i} />;
          });
        })}
      </>
    </div>
  );
};

export default ProjectIcons;
