import { linksObj } from "data/mockups";
import { FC } from "react";
import ProjectButton from "./ProjectButton";
import styles from "./ProjectButtons.module.scss";

const ProjectButtons: FC<{ links: linksObj }> = ({ links }) => {
  return (
    <div className={styles.buttonsContainer}>
      <ProjectButton
        title={"See on Github"}
        icon="github"
        href={links.github}
      />
      <ProjectButton title={"See live"} icon="Arrow-right" href={links.live} />
    </div>
  );
};

export default ProjectButtons;
