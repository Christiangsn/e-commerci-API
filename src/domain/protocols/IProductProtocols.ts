export interface IProductEntityProtocol {
    id: string
    name: string
    price: number
    quantity: number
    created_at: Date
    updated_at: Date
}

export interface IProductModelSearchProtocol {
    id?: string
    name?: string
    price?: number
    quantity?: number
}

export interface IAddProductModelProtocol {
    name: string
    price: number
    quantity: number
}

export interface IAddProductProtocol {
    execute (product : IAddProductModelProtocol): Promise<void>
}
