export default function DummyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div><h1>Async Component</h1>{children}</div>;
}
