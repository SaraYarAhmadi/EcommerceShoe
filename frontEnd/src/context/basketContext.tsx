import { createContext, useEffect } from "react";
import { ProductContextViewModel } from "./productContex";

export interface BasketContextViweModel {
    _id: string,
    cartTotal: number,
    orderby: string,
    count: number,
    products: ProductContextViewModel[]

}

export const initialProductBasket: BasketContextViweModel = {
    _id: "",
    cartTotal: 0,
    orderby: "",
    count: 0,
    products: []
}
export const BasketContext = createContext<BasketContextViweModel>(initialProductBasket)
