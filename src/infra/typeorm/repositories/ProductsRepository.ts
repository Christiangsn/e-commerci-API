import { Repository } from 'typeorm'

import { ProductEntitiy } from '@domain/entities/ProductEntity'
import { FindByNameProductRepository } from '@data/protocols/products/FindByNameProductRepository'
import { IProductModelSearchProtocol, IProductEntityProtocol } from '@domain/protocols/IProductProtocols'

export class ProductsRepository extends Repository<ProductEntitiy> implements FindByNameProductRepository {
  public async findByName ({ name }: IProductModelSearchProtocol): Promise<IProductEntityProtocol | undefined> {
    const product = await this.findOne({
      where: {
        name: name
      }
    })

    return product
  }
}
