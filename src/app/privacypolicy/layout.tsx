import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "プライバシーポリシー",
};

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Sheet>{children}</Sheet>;
    </div>
  );
}
