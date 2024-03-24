import { createContext, useEffect } from "react";
import { ProductContextViewModel } from "./productContex";

export interface BasketContextViweModel {
    _id: string,
    cartTotal: number,
    orderby: string,
    products: ProductContextViewModel[]

}

export const initialProductBasket :BasketContextViweModel ={
    _id: "",
    cartTotal: 0,
    orderby: "",
    products: []
} 

export const BasketContext = createContext<BasketContextViweModel>(initialProductBasket)

// useEffect(()=>{

// },[])
