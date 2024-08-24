"use client"

import { PriceProps } from "@/types";
import axios from "axios"

import { useEffect, useState } from "react"

export function useHistorycalData (crypto:  string) {

    const [chartLoading, setChartLoading] = useState<boolean>(true) ; 

    const [values, setValues] = useState<PriceProps[]>([])

    var chartData : Array<PriceProps> =  [] ;


    const URL =  process.env.NEXT_PUBLIC_COINGECKO_API_BASE_URL + `/coins/${crypto}/market_chart?vs_currency=usd&days=7`; 


    useEffect(() => {

        axios.get(URL,   {
            method: "GET", 
            headers: {
                "x-cg-demo-api-key" : `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`
            }
        }).then((response) => {
            console.log(response.data.prices) ; 

            response.data.prices.forEach((price : Array<number>) => {
                
                chartData.push({data : parseFloat(price[1].toFixed(2))})

            });

           setValues(chartData); 
        })
 
    }, [crypto])


    return {values}

}