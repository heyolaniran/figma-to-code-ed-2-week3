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