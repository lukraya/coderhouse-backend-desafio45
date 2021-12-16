import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts(): Array<any> {
    return this.appService.getProducts();
  }

  @Get(':title')
  getProductByTitle(@Param('title') title: string): any {
    return this.appService.getProductByTitle(title);
  }

  @Post()
  createProduct(@Body() product: ProductDto): any {
    return this.appService.createProduct(product);
  }

  @Put(':title')
  updateProduct(@Param('title') title: string, @Body() data: ProductDto): any {
    return this.appService.updateProduct(data, title);
  }

  @Delete(':title')
  deleteProduct(@Param('title') title: string): any {
    return this.appService.deleteProductByTitle(title);
  }
}
