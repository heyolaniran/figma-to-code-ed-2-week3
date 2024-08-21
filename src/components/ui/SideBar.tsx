"use client"
import { navLinks } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {

    const path = usePathname(); 
    
    


    return (
        <div className="">
                <div className="flex min-h-screen  border-r px-4">
                <div className="flex flex-col  px-4 justify-between">
                    <div className="">
                        <div className=" py-2 px-8 mt-2 bg-blue-600/10 rounded-lg border border-slate-200">
                            <div className="flex items-start justify-start gap-2">
                                <div className=" justify-start bg-blue-500/25 rounded-xl p-2">
                                    <Image src={'/logo.svg'} width={24} height={24} alt="" />
                                </div>
                                <div className="block">
                                    <h2 className="text-md text-blue-600 font-semibold">
                                        Tokena
                                    </h2>
                                    <p className="text-sm text-blue-500"> Finance app </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h1 className="text-md mb-4 text-slate-400 capitalize">Menu</h1>

                            <div className="mt-2">
                                {navLinks.map((item, index) => (
                                    <Link href={item.href} key={index} className={`flex gap-3 text-sm items-center py-2 ${path == item.href ? 'text-white bg-blue-600 rounded-lg px-1' : ''}`}> <Image src={item.icon} width={20} height={20} alt="" className={`${path == item.href ? 'text-white': ''}`} />  {item.name}</Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sticky inset-x-0 bottom-0 p-2">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                <Image src="/profile.svg" alt="" width={40} height={40} className="rounded-full" />
                                <div className="block">
                                    <h1 className="text-md font-semibold">John DOE</h1>
                                    <span className="text-slate-400 text-sm truncate">johndoe@gmail.com</span>
                                </div>
                            </div>
                            <div>
                                <Image src={'/icons/chevron-down.svg'} width={16} height={16} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      
    )
}