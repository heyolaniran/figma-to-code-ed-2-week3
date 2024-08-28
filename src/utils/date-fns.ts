import { formatDistance } from "date-fns"

export const formater =  (date : string) => {

    return formatDistance(date ,  new Date() , {addSuffix : true})
}