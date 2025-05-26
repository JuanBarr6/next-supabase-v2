import LateralNavBar from "./lateral-nav-bar";
import TopNavHeader from "@/feature/protected/componets/molecule/top-nav-header";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[80px] w-full flex items-center bg-background border-b">
        <TopNavHeader />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <LateralNavBar />

        <main className="flex-1 overflow-y-auto p-4 bg-muted/50">
          {children}
        </main>
      </div>
    </div>
  );
}
