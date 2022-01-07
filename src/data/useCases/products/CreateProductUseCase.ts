import { getCustomRepository } from 'typeorm'

import { IAddProductModelProtocol, IAddProductProtocol } from '@domain/protocols/IProductProtocols'
import { ProductsRepository } from '@infra/typeorm/repositories/ProductsRepository'
import { AppError } from '@presentation/errors/AppError'

export class CreateProductService implements IAddProductProtocol {
  public async execute ({ name, price, quantity }: IAddProductModelProtocol): Promise<void> {
    const productsRepository = getCustomRepository(ProductsRepository)

    const productExists = await productsRepository.findByName({ name })
    if (productExists) {
      throw new AppError('There is already one product with this name', 401)
    }

    const product = productsRepository.create({
      name,
      price,
      quantity
    })
    await productsRepository.save(product)
  }
}
