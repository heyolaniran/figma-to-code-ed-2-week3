import { ChevronRight, MoveDown, MoveUp } from "lucide-react";
import ResumeTrendingSkeleton from "./ui/ResumeTrendingSkeleton";
import CryptoTable from "./ui/CryptoTable";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-1 gap-3">
        <div className="p-4 rounded-xl border md:col-span-1">
          <h1 className="text-md font-bold">Balance</h1>
          <div className="flex justify-between items-center gap-4">
            <span className="mt-2 text-xl sm:text-lg font-bold leading-3">
              $63,755,200
            </span>
            <div className="flex gap-1 items-center text-xs">
              <span className="px-2 py-0.5 rounded-xl bg-green-300/85 text-green-600 font-normal text-xs">
                +2.3 %
              </span>{" "}
              vs last month
            </div>
          </div>

          <div className="  mt-14 flex justify-between top-0 gap-2 items-center">
            <button className="rounded-lg px-2 font-bold text-md w-full py-1 bg-blue-400/10 text-blue-400 flex justify-center items-center gap-1">
              <MoveUp className="w-4 h-4" /> Deposit
            </button>
            <button className="rounded-lg px-2 font-bold w-full py-1 bg-blue-400/10 text-blue-400 flex justify-center items-center gap-1">
              <MoveDown className="w-4 h-4 font-bold" /> Withdraw
            </button>
          </div>
        </div>
        <div className="border rounded-xl lg:col-span-3 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg  font-bold">Trending</h1>
            <span className="flex  items-center gap-2 text-sm">
              {" "}
              view more <ChevronRight className="w-4 h-4" />{" "}
            </span>
          </div>

          <div className="mt-2 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-2">
            <ResumeTrendingSkeleton />
            <ResumeTrendingSkeleton />
            <ResumeTrendingSkeleton />
            <ResumeTrendingSkeleton />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <CryptoTable />
      </div>
    </div>
  );
}
