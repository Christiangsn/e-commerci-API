import { getCustomRepository } from 'typeorm'

import { IShowProductProtocol, IProductEntityProtocol, IProductModelSearchProtocol } from '@domain/protocols/IProductProtocols'
import { ProductsRepository } from '@infra/typeorm/repositories/ProductsRepository'
import { AppError } from '@presentation/errors/AppError'

export class ShowProduct implements IShowProductProtocol {
  public async execute ({ id }: IProductModelSearchProtocol): Promise<IProductEntityProtocol | undefined> {
    const productsRepository = getCustomRepository(ProductsRepository)

    const product = productsRepository.findOne(id)
    if (!product) {
      throw new AppError('Product not found', 404)
    }

    return product
  }
}
