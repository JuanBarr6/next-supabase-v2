import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-full">
      <div className="absolute top-0 left-0 h-full w-full">
        <LateralNavBar />
      </div>
      <div className="ml-64 w-full h-full">{children}</div>
    </div>
  );
}
