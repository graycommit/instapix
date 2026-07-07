import AppTopBar from "@/components/AppTopBar";
import BottomNav from "@/components/BottomNav";

export default function PerfilPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-teal-50/40">
      <AppTopBar balance={0} />

      <main className="flex flex-1 items-center justify-center px-6 text-center">
        <p className="text-sm text-slate-400">Em breve</p>
      </main>

      <BottomNav />
    </div>
  );
}
