"use client"

import { Area, AreaChart, CartesianGrid} from "recharts"


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { HistoryChartProps } from "@/types"
const chartData = [
  { data: 186 },
  { data: 305 },
  { data: 237 },
  { data: 73 },
  { data: 209 },
  { data: 214},
]



  const chartConfig = (color:  string) => {

     
   return { 
    data: {
      label: "Desktop",
      color: `hsl(var(${color}))`,
    },
   }
  } 
  

export function HistoryChart({item} : {item : HistoryChartProps}) {

  const color = item.price_change >= 0 ? '--chart-green-1' : '--chart-red-1' ; 
  
  return (
    
        <ChartContainer config={chartConfig(color)} className="w-full h-16">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
           
           
            <Area
              dataKey="data"
              type="natural"
              fill="url(#fillData)"
              fillOpacity={0.4}
              stroke="var(--color-data)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>

  )
}
