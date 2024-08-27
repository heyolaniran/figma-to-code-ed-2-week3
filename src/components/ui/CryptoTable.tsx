"use client";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Search,
  Star,
} from "lucide-react";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCoinCategories } from "@/hooks/useCoinCategories";
import { useCurrencies } from "@/hooks/useCurrencies";
import Image from "next/image";
import { HistoryChart } from "./HistoryChart";
import { useEffect, useState } from "react";
import { currencyType } from "@/types";
import CryptoDetails from "./CryptoDetails";

export default function CryptoTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { categories, isLoading } = useCoinCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { currencies, currencyLoading } = useCurrencies(
    selectedCategory,
    currentPage,
  );

  const [coins, setCoins] = useState<currencyType[]>([]);

  useEffect(() => {
    setCoins(currencies);
  }, [currencies]);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search === "") {
      setCoins(currencies);
    } else {
      const result = coins.filter((item) =>
        item.symbol.toLowerCase().includes(search),
      );
      setCoins(result);
    }
  }, [search]);

  const pages: number[] = [1, 2, 3, 4];

  const handlePrev = () => {
    if (currentPage == 1) return 1;

    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage == 4) return 4;

    setCurrentPage((prev) => prev + 1);
  };

  const handleStep = (step: number) => {
    setCurrentPage(step);
  };

  const [display, SetDisplay] = useState<boolean>(false);

  const [selectedSymbol, setSelectedSymbol] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex justify-end items-center">
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="w-full lg:w-1/2 px-2">
              <SelectValue placeholder="Catégories" />
            </SelectTrigger>
            <SelectContent>
              {isLoading && (
                <>
                  {currencies.forEach(() => {
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
          <TableHeader className="bg-slate-400/10   ">
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
              coins.map((currency, index) => (
                <TableRow key={index} className="text-sm font-medium">
                  <TableCell>
                    {" "}
                    <Star className="w-4 h-4" />{" "}
                  </TableCell>
                  <TableCell className="font-medium">
                    {currency.market_cap_rank}
                  </TableCell>
                  <TableCell className="">
                    <button
                      className="flex items-center gap-1"
                      onClick={() => {
                        SetDisplay(true);
                        setSelectedSymbol(currency.id);
                        setSelectedPrice(currency.current_price);
                      }}
                    >
                      <Image
                        src={currency.image}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt="a"
                      />
                      {currency.symbol.toUpperCase()}
                    </button>
                  </TableCell>
                  <TableCell> ${currency.current_price}</TableCell>
                  <TableCell>
                    <div
                      className={`px-2 py-0.5 rounded-xl text-center text-xs ${currency.price_change_percentage_24h > 0 ? "bg-green-400/20 text-green-600" : "bg-red-400/20 text-red-600"}`}
                    >
                      {currency.price_change_percentage_24h?.toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {currency.market_cap_change_24h?.toFixed(2)}
                  </TableCell>

                  <TableCell>{currency.market_cap!.toFixed(2)}</TableCell>
                  <TableCell className="text-center flex justify-center items-center">
                    <HistoryChart
                      item={{
                        id: currency.id,
                        currency: "usd",
                        price_change: currency.price_change_percentage_24h,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-end gap-1 mt-2 items-center p-2">
          <button
            className="bg-slate-400/20 text-center px-2 py-1 rounded-lg"
            onClick={() => handlePrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {pages.map((page, index) => (
            <button
              className={` ${currentPage === page ? "bg-blue-400 text-white" : "bg-slate-400/20"} text-center px-2 py-1 rounded-lg`}
              key={index}
              onClick={() => handleStep(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="bg-slate-400/20 text-center px-2 py-1 rounded-lg"
            onClick={() => handleNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <CryptoDetails
          display={display}
          id={selectedSymbol}
          price={selectedPrice}
        />
      </div>
    </div>
  );
}
