"use client";

import { useCoinDetails } from "@/hooks/useCoinDetails";
import clsx from "clsx";
import { Star, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HistoryChart } from "./HistoryChart";

export default function CryptoDetails({
  display = false,
  id,
  price,
}: {
  display: boolean;
  id: string;
  price: number;
}) {
  const [open, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(display);
  }, [id, display]);

  const { isLoading, coin } = useCoinDetails({ id });

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Close the side drawer or dialog box
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      className={clsx(
        "fixed h-full w-full  bg-black/50 backdrop-blur-sm top-0 left-0 mx-1 -translate-x-full transition-all",
        open && "translate-x-0",
      )}
    >
      <section
        className="bg-slate-50  flex flex-col overflow-auto absolute text-black rounded-lg px-6 md:right-6 right-2 top-2 p-8 -z-10 w-full md:w-4/6 lg:w-2/6  "
        ref={ref}
      >
        {!isLoading ? (
          <>
            <div className="flex justify-between items-center">
              <h1 className="font-medium capitalize">{coin?.name}</h1>
              <button
                className="bg-slate-200 relative rounded-lg p-1"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 mt-2">
              <HistoryChart
                item={{
                  id: coin?.id!,
                  currency: "usd",
                  days: 7,
                  price_change: coin?.market_data.price_change_24h!,
                }}
                vertical
                horizontal
                className="w-full h-16"
              />
            </div>

            <div className="mb-2 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <Image
                    src={coin?.image.small!}
                    width={32}
                    height={32}
                    alt="coin"
                  />
                  <h1 className="text-md space-x-1 font-medium">
                    {" "}
                    {coin?.name} ({coin?.symbol.toUpperCase() + "/USD"}){" "}
                  </h1>
                </div>

                <div className="">$ {price}</div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <h1 className="text-md font-medium capitalize">
                      {" "}
                      Crypto Market Rank{" "}
                    </h1>
                  </div>

                  <div className="px-2 py-1 rounded-full text-xs font-medium bg-slate-200/75">
                    Rank #{coin?.market_cap_rank}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-1 items-center">
                    <h1 className="text-md font-medium capitalize">
                      {" "}
                      Market Cap{" "}
                    </h1>
                  </div>

                  <div className="px-2 py-1 font-medium  text-slate-600">
                    {"$" +
                      new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: 2,
                      }).format(coin?.market_data.market_cap.usd!)}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-1 items-center">
                  <h1 className="text-md font-medium capitalize">
                    {" "}
                    Circulating Supply{" "}
                  </h1>
                </div>

                <div className="px-2 py-1   font-medium text-slate-600">
                  {"$" +
                    new Intl.NumberFormat("en-US", {
                      minimumFractionDigits: 2,
                    }).format(coin?.market_data.circulating_supply!)}
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-1 items-center">
                  <h1 className="text-md font-medium capitalize"> 24h High </h1>
                </div>

                <div className="px-2 py-1   font-medium text-slate-600">
                  {"$" + coin?.market_data.high_24h.usd!}
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-1 items-center">
                  <h1 className="text-md font-medium capitalize"> 24h Low </h1>
                </div>

                <div className="px-2 py-1   font-medium text-slate-600">
                  {"$" + coin?.market_data.low_24h.usd!}
                </div>
              </div>
            </div>

            <div
              className="mt-4 text-black text-sm text-justify line-clamp-[10]"
              dangerouslySetInnerHTML={{ __html: coin?.description.en! }}
            ></div>

            <div className="mt-2">
              <button className="bg-blue-400/20 px-4 py-1.5 w-full rounded-lg text-blue-600 flex gap-2 justify-center font-medium text-center items-center">
                <Star className="w-4 h-4" /> Add to Favorites
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
