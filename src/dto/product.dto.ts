/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'

export class ProductDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    thumbnail: string;
    
    @ApiProperty()
    stock: number;
}