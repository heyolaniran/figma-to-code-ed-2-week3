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

export default function CryptoTable() {
  const { categories, isLoading } = useCoinCategories();

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
          <TableHeader className="bg-slate-400/10 text-black">
            <TableRow>
              <TableHead className="w-6"></TableHead>
              <TableHead className="">Coins</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-8">24H</TableHead>
              <TableHead>24H Volume</TableHead>
              <TableHead>MarketCap</TableHead>
              <TableHead className="text-right">Last 7 days </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {" "}
                <Star className="w-4 h-4" />{" "}
              </TableCell>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Paid</TableCell>

              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}