import { IProduct } from "../../types/index";

class ProductCatalog {
  private products: IProduct[] = [];
  private selectedProduct: IProduct | null = null;

  constructor() {
  }
  setProducts(products: IProduct[]): void {
    this.products = products;
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: string): IProduct | null {
    const product = this.products.find(item => item.id === id);
    return product || null;
  }

  setSelectedProduct(product: IProduct): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): IProduct | null {
    return this.selectedProduct;
  }
}

export default ProductCatalog
