import { currencyType } from "@/types";


export function paginated(array : Array<currencyType> , currentPage : number, perPage : number = 4) {
    const pageSize : number = Math.ceil(array.length / perPage) ; 
    console.log( "paginate : ",  pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    var paginate =  array.splice(startIndex, pageSize);

    return { paginate , pageSize } ; 
}