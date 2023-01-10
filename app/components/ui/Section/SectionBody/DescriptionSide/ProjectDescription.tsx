import { linksObj } from "data/mockups";
import { FC, ReactNode } from "react";
import ProjectButtons from "./Buttons/ProjectButtons";
import ProjectIcons from "./Icons/ProjectIcons";
import styles from "./ProjectDescription.module.scss";
import ProjectParagraph from "./Text/ProjectParagraph";
import ProjectTitle from "./Text/ProjectTitle";

interface IProjectDescription {
  title: string;
  paragraph: string;
  icons: Array<string[] | string>;
  links: linksObj;
}

const ProjectDescription: FC<IProjectDescription> = ({
  title,
  paragraph,
  icons,
  links,
}) => {
  return (
    <div className={styles.desc}>
      <ProjectTitle title={title} />
      <ProjectParagraph paragraph={paragraph} />
      <ProjectIcons icons={icons} />
      <ProjectButtons links={links} />
    </div>
  );
};

export default ProjectDescription;
