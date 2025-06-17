import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

type Testimonial = {
  image: string;
  name: string;
  message: string;
};

type Props = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

const TrustedSection: React.FC<Props> = ({ title, subtitle, testimonials }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.testimonials}>
        {testimonials.map((item, index) => (
          <div className={styles.testimonialCard} key={index}>
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialContent}>
              <h4 className={styles.testimonialName}>{item.name}</h4>
              <p className={styles.testimonialMessage}>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
