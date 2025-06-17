import React from "react";
import styles from "./index.module.css";
import { IconType } from "react-icons";

export type FeatureItem = {
  icon: IconType;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  features: FeatureItem[];
};

const ServicesDetail: React.FC<Props> = ({
  heading,
  description,
  features,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <h4 className={styles.description}>{description}</h4>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} />
              </div>
              <h4 className={styles.title}>{feature.title}</h4>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
