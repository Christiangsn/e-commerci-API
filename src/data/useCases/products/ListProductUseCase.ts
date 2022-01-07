import { getCustomRepository } from 'typeorm'

import { IListProductProtocol, IProductEntityProtocol } from '@domain/protocols/IProductProtocols'
import { ProductsRepository } from '@infra/typeorm/repositories/ProductsRepository'

export class ListProduct implements IListProductProtocol {
  public async execute (): Promise<IProductEntityProtocol[]> {
    const productsRepository = getCustomRepository(ProductsRepository)
    const products = productsRepository.find()
    return products
  }
}
