import { linksObj } from "data/mockups";
import { FC } from "react";
import ProjectDescription from "./DescriptionSide/ProjectDescription";
import Mockup from "./PictureSide/Mockup";
import styles from "./SectionBody.module.scss";

interface ISectionBody {
  title: string;
  paragraph: string;
  projectnumber: number;
  icons: Array<string | string[]>;
  links: linksObj;
}

const SectionBody: FC<ISectionBody> = ({
  title,
  projectnumber,
  paragraph,
  icons,
  links,
}) => {
  return (
    <div className={styles.body}>
      <Mockup projectnumber={projectnumber} />
      <ProjectDescription
        title={title}
        paragraph={paragraph}
        icons={icons}
        links={links}
      />
    </div>
  );
};

export default SectionBody;
