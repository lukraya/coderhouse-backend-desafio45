import { Injectable } from '@nestjs/common';

const products = [
  {
    title: 'prod1',
    price: 4500,
    thumbnail: 'url1',
    stock: 50,
  },
  {
    title: 'prod2',
    price: 3100,
    thumbnail: 'url2',
    stock: 50,
  },
];

@Injectable()
export class AppService {
  getProducts(): Array<any> {
    return products;
  }

  getProductByTitle(title: string): any {
    const result = products.filter((element) => element.title === title);
    if (result[0]) {
      return result[0];
    } else {
      return 'Producto no encontrado';
    }
  }

  createProduct(product): any {
    try {
      products.push(product);
      return {
        msg: 'Nuevo producto creado',
        prod: product,
      };
    } catch (error) {
      return `Error al crear el producto: ${error}`;
    }
  }

  updateProduct(newData, titleOld): any {
    try {
      const index = products.findIndex((element) => element.title === titleOld);
      products[index] = newData;
      return {
        msg: 'Producto actualizado',
        prod: products[index],
      };
    } catch (error) {
      return `Error al actualizar el producto: ${error}`;
    }
  }

  deleteProductByTitle(title): any {
    try {
      const index = products.findIndex((element) => element.title === title);
      const eliminated = products.splice(index, 1);
      return {
        msg: 'Producto eliminado',
        prod: eliminated,
      };
    } catch (error) {
      return `Error al eliminar el producto: ${error}`;
    }
  }
}
