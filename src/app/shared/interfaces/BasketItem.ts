import { Product } from './Product';

export interface BasketItem extends Product {
    quantity: number,
    tax: number,
    total: number
}