"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HeaderMobile() {
  const path = usePathname();
  const [open, SetIsOpen] = useState<boolean>(false);

  return (
    <div className={`lg:hidden  `}>
      <div className="flex justify-center border  p-1 rounded-lg items-center">
        <Menu className="w-5 h-5" onClick={() => SetIsOpen(true)} />
      </div>

      <div
        className={clsx(
          `fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-0 transition-all  ${open ? "" : "hidden"}`,
          open && "translate-x-0",
        )}
      >
        <section className="text-black rounded-r-md bg-slate-50 flex-col absolute left-0 h-screen justify-between  w-56 p-8 flex z-50 top-0">
          <div className="flex-col ">
            <div className="flex justify-end mb-4 items-center">
              <Image
                src={"/icons/close.svg"}
                width={20}
                height={20}
                alt=""
                onClick={() => SetIsOpen(false)}
                className="p-1 bg-slate-300 rounded-md "
              />
            </div>
            <div className="mt-4">
              {navLinks.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`flex gap-3 text-sm items-center py-2 ${path == item.href ? "text-white bg-blue-600 rounded-lg px-1" : ""}`}
                >
                  {" "}
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt=""
                    className={`${path == item.href ? "text-white" : ""}`}
                  />{" "}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <Image
                  src="/profile.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="block">
                  <h1 className="text-sm font-semibold">John DOE</h1>
                  <span className="text-slate-400 text-xs truncate">
                    johndoe@gmail.com
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src={"/icons/chevron-down.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
