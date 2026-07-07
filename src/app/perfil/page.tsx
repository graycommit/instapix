import AccountButton from "@/components/AccountButton";
import AppTopBar from "@/components/AppTopBar";
import BalancePill from "@/components/BalancePill";
import BottomNav from "@/components/BottomNav";
import Brand from "@/components/Brand";

export default function PerfilPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-teal-50/40">
      <AppTopBar
        left={
          <>
            <AccountButton />
            <Brand className="h-6" />
          </>
        }
        right={<BalancePill balance={0} />}
      />

      <main className="flex flex-1 items-center justify-center px-6 text-center">
        <p className="text-sm text-slate-400">Em breve</p>
      </main>

      <BottomNav />
    </div>
  );
}
