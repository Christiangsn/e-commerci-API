import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { IProductEntityProtocol } from '@domain/protocols/IProductProtocols'

@Entity('products')
export class ProductEntitiy implements IProductEntityProtocol {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column('decimal')
    price: number

    @Column('int')
    quantity: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
