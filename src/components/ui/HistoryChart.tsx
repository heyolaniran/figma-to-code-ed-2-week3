"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HistoryChartProps } from "@/types";
import { useHistorycalData } from "@/hooks/useHistorycalData";

const chartConfig = (color: string, token: string) => {
  return {
    data: {
      label: `${token}`,
      color: `hsl(var(${color}))`,
    },
  };
};

export function HistoryChart({
  item,
  vertical = false,
  horizontal = false,
  className = "w-1/2 h-16",
}: {
  item: HistoryChartProps;
  vertical?: boolean;
  horizontal?: boolean;
  className?: string;
}) {
  const { values } = useHistorycalData(item.id);

  const color = item.price_change >= 0 ? "--chart-green-1" : "--chart-red-1";

  return (
    <ChartContainer
      config={chartConfig(color, item.id)}
      className={`${className} mt-4`}
    >
      <AreaChart
        accessibilityLayer
        data={values}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={vertical} horizontal={horizontal} />

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
  );
}
