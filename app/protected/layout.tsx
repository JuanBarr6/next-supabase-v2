import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="lg:hidden w-full h-auto">
        <LateralNavBar />
      </div>

      <div className="flex flex-row w-full h-full">
        <div className="hidden lg:flex lg:w-1/6">
          <LateralNavBar />
        </div>
        <div className="flex flex-col w-full h-full p-8">{children}</div>
      </div>
    </div>
  );
}
