"use client"
import cn from "@/utils/cn";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import HeaderMobile from "./HeaderMobile";
import useScroll from "@/hooks/useScroll";
export default function TopNavBar() {
    const segment = useSelectedLayoutSegment() ?? "Dashboard"

    const { theme ,  setTheme } = useTheme() ; 
    const light = theme == "light" ; 

    const scroll = useScroll(0)

    return (
        <div className={cn(
            `sticky top-0 inset-x-0 z-30 w-full transition-all backdrop-blur-lg  px-8 border-b md:block`, 
            {'bg-slate-200/50 dark:bg-black/30 backdrop-blur-lg':  scroll, }
        )}>
            <div className="flex py-4 items-center justify-between">
                
                <div className="flex gap-3 items-center">
                    <HeaderMobile />
                    <div className="block">
                        <h1 className="text-md font-bold">{segment}</h1>
                        <span className="text-sm">Welcome Back , John Doe !</span>
                    </div>

                    <div className="md:block hidden">
                        <button className="px-4 py-1 text-white bg-blue-600 rounded-lg flex gap-2">
                            <Image src={'/icons/wallet.svg'} width={20} height={20} alt="" /> Connect Wallet
                        </button>
                    </div>
                </div>

                <div className="p-2  flex justify-end border rounded-lg">
                    {light ? (
                        <Moon className={`w-4 h-4 `} onClick={() => setTheme("dark")} />
                    ) : (
                         <Sun className={`w-4  h-4 `} onClick={() => setTheme("light")} />
                    )
                    }
                  
                   
                </div>
            </div>
        </div>
    )
}