import Nav from "../components/nav/Nav";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav state={false} />
      {children}
    </>
  );
}
