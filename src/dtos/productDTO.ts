import { ProductModel } from "../types";

export interface GetProductsInput {
    q: unknown
}

export type GetProductsOutput = ProductModel[]

export interface CreateProductInput {
    name: unknown,
    price: unknown
}

export interface CreateProductOutput {
    message: string,
    product: ProductModel
}