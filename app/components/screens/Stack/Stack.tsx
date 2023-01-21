import SectionSubTitle from "@/components/ui/Section/SectionHeading/SectionSubTitle";
import SectionTitle from "@/components/ui/Section/SectionHeading/SectionTitle";
import { FC } from "react";
import styles from "./Stack.module.scss";
import StackSlider from "./StackSlider";

const Stack: FC = () => {
  return (
    <div className={styles.stackContainer} id="stack">
      <SectionTitle title="Stack" />
      <SectionSubTitle subtitle="Experienced with both front-end and back-end technologies" />
      <StackSlider />
    </div>
  );
};

export default Stack;
