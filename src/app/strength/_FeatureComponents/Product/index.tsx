"use client";

import styles from "./index.module.css";
import Image from "next/image";

type ProductItemType = {
  subtitle: string;
  image: string;
  contents: {
    icon: string;
    title: string;
    description: string;
  }[];
};

type Props = {
  heading: string;
  description: string;
  items: ProductItemType[];
};

export default function ServicesProduct({
  heading,
  description,
  items,
}: Props) {
  return (
    <section className={styles.products}>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.productBlock} ${
            index % 2 === 1 ? styles.reverse : ""
          }`}
        >
          <div className={styles.blockContent}>
            <h3 className={styles.subtitle}>{item.subtitle}</h3>
            <div className={styles.innerContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt="Product Visual"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.itemList}>
                {item.contents.map((content, i) => (
                  <div key={i} className={styles.item}>
                    <Image src={content.icon} alt="" width={40} height={40} />
                    <div>
                      <h4>{content.title}</h4>
                      <p>{content.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
