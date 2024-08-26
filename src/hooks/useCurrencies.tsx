"use client";

import { currencyType } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export function useCurrencies(category: string = "", page: number = 1) {
  const [currencyLoading, setIsLoading] = useState<boolean>(true);

  const [currencies, setCurrencies] = useState<currencyType[]>([]);

  const BASE_URL =
    process.env.NEXT_PUBLIC_COINGECKO_API_BASE_URL +
    `/coins/markets/?vs_currency=USD&per_page=25&page=${page}`;
  const URL = category === "" ? BASE_URL : BASE_URL + `?category=${category}`;

  useEffect(() => {
    axios
      .get(URL, {
        method: "GET",
        headers: {
          "x-cg-demo-api-key": `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
        },
      })
      .then((response) => {
      
        setCurrencies(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [category, page]);

  return { currencies, currencyLoading };
}
