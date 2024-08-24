"use client";
import { MoreVertical, Search, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCoinCategories } from "@/hooks/useCoinCategories";
import { useCurrencies } from "@/hooks/useCurrencies";
import Image from "next/image";

export default function CryptoTable() {
  const { categories, isLoading } = useCoinCategories();

  const { currencies, currencyLoading } = useCurrencies();

  return (
    <div className="p-2">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative ">
          <div className="absolute px-3 inset-y-0 start-0 flex items-center  pointer-events-none">
            <Search className="w-5 h-5 text-slate-600" />
          </div>

          <input
            className="block md:w-3/4 w-full outline-0 placeholder:text-sm placeholder:text-slate-400 px-4 ps-10 py-2 text-sm  rounded-lg border border-gray-200 "
            placeholder="Search Cryptos..."
          />
        </div>

        <div className="flex justify-end items-center">
          <Select>
            <SelectTrigger className="w-full md:w-1/4">
              <SelectValue placeholder="Catégories" />
            </SelectTrigger>
            <SelectContent>
              {isLoading && (
                <>
                  {categories.forEach(() => {
                    return (
                      <div className="h-2.5 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-8  "></div>
                    );
                  })}
                </>
              )}

              {!isLoading && (
                <>
                  {categories.map((category, index) => (
                    <SelectItem value={category.category_id} key={index}>
                      {category.name}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 border rounded-lg  ">
        <div className="p-3 mb-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Markets</h1>
          <button className="border p-1 rounded-lg cursor-pointer">
            <MoreVertical />
          </button>
        </div>

        <Table className="mb-4">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="bg-slate-400/10 text-black ">
            <TableRow className="">
              <TableHead className="w-6"></TableHead>
              <TableHead className="w-6">#</TableHead>
              <TableHead className="">Coins</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-8">24H</TableHead>
              <TableHead>24H Volume</TableHead>
              <TableHead>MarketCap</TableHead>
              <TableHead className="text-right">Last 7 days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!currencyLoading ? (
              currencies.map((currency, index) => (
                <TableRow key={index} className="text-sm font-medium">
                  <TableCell>
                    {" "}
                    <Star className="w-4 h-4" />{" "}
                  </TableCell>
                  <TableCell className="font-medium">
                    {currency.market_cap_rank}
                  </TableCell>
                  <TableCell className="flex gap-1 items-center ">
                    <Image src={currency.image} width={24} height={24} className="rounded-full"  alt="a"/> {currency.symbol.toUpperCase()}
                  </TableCell>
                  <TableCell> ${currency.current_price}</TableCell>
                  <TableCell>
                    <div
                      className={`px-2 py-0.5 rounded-xl text-center text-xs ${currency.price_change_percentage_24h > 0 ? "bg-green-400/20 text-green-600" : "bg-red-400/20 text-red-600"}`}
                    >
                      {currency.price_change_percentage_24h.toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {currency.market_cap_change_24h.toFixed(2)}
                  </TableCell>

                  <TableCell>{currency.market_cap.toFixed(2)}</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
