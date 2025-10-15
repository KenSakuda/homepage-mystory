import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "採用情報",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "10px 0",
      }}
    >
      <Sheet>{children}</Sheet>;
    </div>
  );
}
