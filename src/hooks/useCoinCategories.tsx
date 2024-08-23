"use client";

import { coinCategoryType } from "@/types";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export function useCoinCategories() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [categories, setCategories] = useState<coinCategoryType[]>([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/categories/list", {
        method: "GET",
        headers: {
          "x-cg-demo-api-key": "CG-mNvAm5yBArmHYDBbywqkzwvr",
        },
      })
      .then((response) => {
        setCategories(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .then((data) => {})
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { categories, isLoading };
}
