import {IProduct} from "../../../types/index";

class ShoppingCart  {
   items: IProduct[] = []
    constructor() {
    this.items = [];
}
getShoppingCart(): IProduct[] {
    return this.items;
}

addItem(item: IProduct): void {
   this.items.push(item)
}

removeItem(item: IProduct): void {
    const index = this.items.findIndex(p => p.id === item.id);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
} 

clearItem(): void{
    this.items = [];
}

getTotalPrice(): number {
     return this.items.reduce((sum, item) => {
      const price = item.price ?? 0;
      return sum + price;
    }, 0);
} 

getItemCount(): number {
    return this.items.length;
}

hasItem(id: string): boolean {
    return this.items.some(item => item.id === id);
  }

}
export default ShoppingCart
