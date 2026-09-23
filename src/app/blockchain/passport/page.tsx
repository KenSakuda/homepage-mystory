import type { Metadata } from "next";
import styles from "./page.module.css";
import {
  Hero,
  ProblemSection,
  OverviewSection,
  ExcelSection,
  ReadinessSection,
  SupplierSection,
  PassportSection,
  RegistrySection,
  DiagnosisSection,
  PocSection,
  FinalCta,
} from "./_components/PassportLandingPage";

export const metadata: Metadata = {
  title: "MyStory Passport | EU Battery Passport対応を、データからシンプルに。",
  description:
    "Excel・ERP・PLM・Supplierに分散した製品情報を整理し、EU Battery Passport対応を支援する日本企業向けプラットフォーム。",
};

export default function PassportPage() {
  return (
    <main className={styles.page}>
      <Hero />
      <ProblemSection />
      <OverviewSection />
      <ExcelSection />
      <ReadinessSection />
      <SupplierSection />
      <PassportSection />
      <RegistrySection />
      <DiagnosisSection />
      <PocSection />
      <FinalCta />
    </main>
  );
}
