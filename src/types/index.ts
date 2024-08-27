import { ReactNode } from "react";

export type navLinksType = {
  name: string;
  href: string;
  icon: string;
};


export type coinCategoryType = {
  category_id : string
  name: string
}


export type currencyType = {

    id: string, 
    symbol: string, 
    name: string
    image: string, 
    current_price: number, 
    market_cap: number
    market_cap_rank: number, 
    total_volume: string, 
    price_change_percentage_24h: number
    market_cap_change_24h: number

}


export type HistoryChartProps = {
  id: string 
  currency: string, 
  days?: number,
  price_change: number 

}

export type PriceProps = {

  data : number
}

export type CoinResumeProps = {
  id: string , 
  symbol : string, 
  name: string
  description: { en: string } 
  image : { small : string } 
  current_price : { usd : string } 
  market_data : {
    market_cap : {usd : number},
    circulating_supply: number, 
    high_24h : {
      usd:  number
    }, 
    low_24h: {
      usd :  number
    }, 
    price_change_24h : number
  }
  
  market_cap_rank: number
 
}