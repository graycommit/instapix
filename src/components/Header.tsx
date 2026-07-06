import Brand from "./Brand";

export default function Header() {
  return (
    <header className="border-b border-zinc-100 px-6 py-5">
      <div className="mx-auto max-w-md">
        <Brand />
      </div>
    </header>
  );
}
