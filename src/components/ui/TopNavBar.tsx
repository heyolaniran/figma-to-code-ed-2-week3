"use client"
import cn from "@/utils/cn";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";

export default function TopNavBar() {
    const segment = useSelectedLayoutSegment() ?? "Dashboard"
    return (
        <div className={cn(
            `sticky top-0 inset-x-0 z-30 w-full transition-all bg-white px-8 border-b md:block`
        )}>
            <div className="flex h-14 items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div className="block">
                        <h1 className="text-md font-bold">{segment}</h1>
                        <span className="text-sm">Welcome Back , John Doe !</span>
                    </div>

                    <div className="">
                        <button className="px-4 py-1 text-white bg-blue-600 rounded-lg flex gap-2">
                            <Image src={'/icons/wallet.svg'} width={20} height={20} alt="" /> Connect Wallet
                        </button>
                    </div>
                </div>

                <div className="p-2 flex justify-end border rounded-lg">
                    <Image alt="" src={'/icons/moon.svg'} width={20} height={20} className="" />
                </div>
            </div>
        </div>
    )
}