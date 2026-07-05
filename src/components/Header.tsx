import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-zinc-100 px-6 py-5">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Logo className="h-7 w-7" />
        <span className="text-lg">
          <span className="font-bold text-zinc-900">PREMIA</span>{" "}
          <span className="font-normal text-teal-500">pix</span>
        </span>
      </div>
    </header>
  );
}
