export interface Product {
    id: number,
    desc: string,
    image: string,
    caption?: string,
    price: number,
    taxed: boolean,
    dutied: boolean
}