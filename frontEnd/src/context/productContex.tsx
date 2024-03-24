import { createContext } from 'react';

export interface ProductContextViewModel {
  _id: string,
  title: string,
  description: string,
  slug: string,
  price: number,
  quantity: number,
  sold: number,
  images: string[],
  color: string[],
  category: string,
  size: string[],
  gender: number,
  totalrating: string
}


export const ProductContext = createContext<ProductContextViewModel[]>([]);
