import { IProductModelSearchProtocol, IProductEntityProtocol } from '@domain/protocols/IProductProtocols'

export interface FindByNameProductRepository {
    findByName ({ name }: IProductModelSearchProtocol): Promise<IProductEntityProtocol | undefined>
}
