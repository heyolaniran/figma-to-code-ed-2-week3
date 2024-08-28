"use client";
import cn from "@/utils/cn";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Wallet2 } from "lucide-react";
import HeaderMobile from "./HeaderMobile";
import useScroll from "@/hooks/useScroll";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TopNavBar() {
  const segment = useSelectedLayoutSegment() ?? usePathname().substring(1);

  const { theme, setTheme } = useTheme();
  const light = theme == "light";

  const scroll = useScroll(0);

  return (
    <div
      className={cn(
        ` top-0 inset-x-0 z-30 w-full transition-all backdrop-blur-lg  px-8 border-b md:block`,
        { "bg-slate-200/50 dark:bg-black/30 backdrop-blur-lg": scroll },
      )}
    >
      <div className="flex py-4 items-center justify-between">
        <div className="flex gap-3 items-center">
          <HeaderMobile />
          <div className="block">
            <h1 className="text-md font-bold capitalize">{segment}</h1>
            <span className="text-sm">Welcome Back , John Doe !</span>
          </div>

          <div className="md:block hidden">
            <button className="px-4 py-1 text-white bg-blue-600 rounded-lg flex gap-2">
              <Wallet2 className="w-5 h-5" />
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="flex justify-end items-center gap-1">
          <div className="p-2">
            <Select>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2  flex  border rounded-lg">
            {light ? (
              <Moon className={`w-4 h-4 `} onClick={() => setTheme("dark")} />
            ) : (
              <Sun className={`w-4  h-4 `} onClick={() => setTheme("light")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
