"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CoinResumeProps } from "@/types";

export const useCoinDetails = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [coin, setCoin] = useState<CoinResumeProps>();

  const URL = `https://api.coingecko.com/api/v3/coins/${id}`;
  useEffect(() => {
    if (id !== "") {
      axios
        .get(URL, {
          headers: {
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY,
          },
        })
        .then((response) => {
          setCoin(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [id]);

  return { isLoading, coin };
};
