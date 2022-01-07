import { getCustomRepository } from 'typeorm'

import { IListProductProtocol, IProductEntityProtocol } from '@domain/protocols/IProductProtocols'
import { ProductsRepository } from '@infra/typeorm/repositories/ProductsRepository'

export class ListProduct implements IListProductProtocol {
  public async execute (): Promise<IProductEntityProtocol[]> {
    const productsRepository = getCustomRepository(ProductsRepository)
    const products = await productsRepository.find()
    return products
  }
}
