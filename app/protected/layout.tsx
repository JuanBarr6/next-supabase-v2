import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";
import MobileDrawer from "@/feature/protected/componets/drawer-mobile"; // ajusta la ruta según tu estructura

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Mobile drawer trigger */}
      <MobileDrawer />

      {/* Layout principal */}
      <div className="flex flex-row w-full h-full overflow-hidden">
        {/* Sidebar para desktop */}
        <div className="hidden lg:flex lg:w-1/6">
          <LateralNavBar />
        </div>

        {/* Contenido */}
        <div className="flex flex-col w-full h-full p-4 lg:p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
