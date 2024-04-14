import { createContext, useEffect } from "react";
import { ProductContextViewModel } from "./productContex";

export interface BasketContextViweModel {
    _id: string,
    cartTotal: number,
    orderby: string,
    count: number,
    products: ProductContextViewModel[],
    updateBasketProducts: (newProducts: ProductContextViewModel[]) => void,

}

export const initialProductBasket: BasketContextViweModel = {
    _id: "",
    cartTotal: 0,
    orderby: "",
    count: 0,
    products: [],
    updateBasketProducts: (newProducts: ProductContextViewModel[]) => { },
}

export const BasketContext = createContext<BasketContextViweModel>(initialProductBasket);