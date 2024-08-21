import { MoveDown, MoveUp } from "lucide-react";


export default function Dashboard () {

    return (
        <div className="p-4">

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-1 gap-3">
                <div className="p-4 rounded-xl border lg:col-span-1">
                    <h1 className="text-md font-bold">
                        Balance
                    </h1>
                    <div className="flex justify-between items-center gap-4">
                        <span className="mt-2 text-xl sm:text-lg font-bold leading-3">$63,755,200</span>
                        <div className="flex gap-1 items-center text-xs">
                            <span className="px-2 py-0.5 rounded-xl bg-green-300/85 text-green-600 font-normal text-xs">+2.3 %</span> vs last month
                        </div>
                    </div>

                    <div className=" mt-4 flex justify-between gap-2 items-center">
                        <button className="rounded-lg px-2 font-bold text-md w-full py-1 bg-blue-400/10 text-blue-400 flex justify-center items-center gap-1">
                            <MoveUp className="w-4 h-4"/> Deposit
                        </button>
                        <button className="rounded-lg px-2 font-bold w-full py-1 bg-blue-400/10 text-blue-400 flex justify-center items-center gap-1">
                            <MoveDown className="w-4 h-4 font-bold"/> Withdraw
                        </button>
                    </div>
                </div>
                <div className="border rounded-xl lg:col-span-3 p-4">
                    lorem
                </div>
            </div>

        </div>
    )
}