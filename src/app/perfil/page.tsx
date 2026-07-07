import AccountButton from "@/components/AccountButton";
import AppTopBar from "@/components/AppTopBar";
import BalancePill from "@/components/BalancePill";
import BottomNav from "@/components/BottomNav";
import Brand from "@/components/Brand";

export default function PerfilPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <AppTopBar
        left={
          <>
            <AccountButton />
            <Brand />
          </>
        }
        right={<BalancePill balance={0} />}
      />

      <main className="flex flex-1 items-center justify-center px-6 text-center">
        <p className="text-sm text-neutral-400">Em breve</p>
      </main>

      <BottomNav />
    </div>
  );
}
