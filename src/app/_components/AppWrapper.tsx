import SideBar from "@/components/ui/SideBar";
import TopNavBar from "@/components/ui/TopNavBar";
import { ReactNode } from "react";

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="lg:block hidden min-h-screen sticky">
        <SideBar />
      </div>

      <main className="flex-1">
        <TopNavBar />
        <div className="flex flex-col  sm:border-r sm:border-slate-50 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
