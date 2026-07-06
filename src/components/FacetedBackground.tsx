export default function FacetedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-50">
      <div
        className="absolute -left-20 -top-28 h-[26rem] w-[26rem] bg-slate-100"
        style={{ clipPath: "polygon(0 0, 100% 15%, 55% 100%, 0 65%)" }}
      />
      <div
        className="absolute -right-10 -top-10 h-80 w-72 bg-slate-200/60"
        style={{ clipPath: "polygon(25% 0, 100% 0, 100% 65%, 0 100%)" }}
      />
      <div
        className="absolute -left-16 bottom-0 h-72 w-full bg-slate-100"
        style={{ clipPath: "polygon(0 45%, 100% 15%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute -right-16 bottom-0 h-64 w-64 bg-slate-200/50"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 15% 100%)" }}
      />
    </div>
  );
}
