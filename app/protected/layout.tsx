import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full h-full">
        <LateralNavBar />
        <div className="flex flex-col w-full h-full p-8 ">{children}</div>
      </div>
    </div>
  );
}
