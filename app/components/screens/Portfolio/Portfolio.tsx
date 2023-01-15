import SectionBody from "@/components/ui/Section/SectionBody/SectionBody";
import SectionSubTitle from "@/components/ui/Section/SectionHeading/SectionSubTitle";
import SectionTitle from "@/components/ui/Section/SectionHeading/SectionTitle";
import { FC } from "react";
import styles from "./Portfolio.module.scss";
import { mockups } from "data/mockups";
import FilmBackground from "@/components/ui/Background/FilmBackground";
import ClockBackground from "@/components/ui/Background/ClockBackground";

const Portfolio: FC = () => {
  return (
    <>
      <div id="portfolio" className={styles.portfolio}>
        <SectionTitle title="Portfolio" />
        <SectionSubTitle subtitle="Designed, developed and deployed" />
        <>
          {mockups.map((mockup) => {
            return (
              <SectionBody
                title={mockup.title}
                projectnumber={mockup.id}
                key={mockup.id}
                paragraph={mockup.paragraph}
                icons={mockup.icons}
                links={mockup.links}
              />
            );
          })}
        </>
        {/* <ClockBackground />
        <FilmBackground /> */}
      </div>
    </>
  );
};

export default Portfolio;
