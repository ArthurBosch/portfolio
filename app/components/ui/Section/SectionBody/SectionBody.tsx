import { linksObj } from "data/mockups";
import dynamic from "next/dynamic";
import { FC } from "react";
import ProjectDescription from "./DescriptionSide/ProjectDescription";

import styles from "./SectionBody.module.scss";

interface ISectionBody {
  title: string;
  paragraph: string;
  projectnumber: number;
  icons: Array<string | string[]>;
  links: linksObj;
}

const DynamicMockup = dynamic(() => import("./PictureSide/Mockup"), {
  ssr: false,
});

const SectionBody: FC<ISectionBody> = ({
  title,
  projectnumber,
  paragraph,
  icons,
  links,
}) => {
  return (
    <div className={styles.body}>
      <DynamicMockup projectnumber={projectnumber} />
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
