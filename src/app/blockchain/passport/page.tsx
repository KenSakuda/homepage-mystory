import type { Metadata } from "next";
import styles from "./page.module.css";
import BatteryPassportLandingPage from "./_components/PassportLandingPage";

export const metadata: Metadata = {
  title: "MyStory Passport | EU Battery Passport対応を、データから。",
  description:
    "2027年2月18日のEU Battery Passport義務化に向けて、Excel・ERP・PLM・Supplierに分散するデータを整理し、対応状況の可視化からPassport生成・Registry連携まで支援します。",
};

export default function Page() {
  return (
    <main className={styles.page}>
      <BatteryPassportLandingPage />
    </main>
  );
}
