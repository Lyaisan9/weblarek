import './scss/styles.scss';
import './scss/styles.scss';
import Buyer from './components/base/Models/Buyer.ts'
import ProductCatalog from './components/base/Models/ProductCatalog.ts'
import ShoppingCart from './components/base/Models/ShoppingCart.ts'
import { apiProducts } from './utils/data';
import { ApiCommunication } from './components/base/ApiCommunication.ts'
import { Api } from './components/base/Api.ts';
import { API_URL } from './utils/constants.ts'

const productsModel = new ProductCatalog();
productsModel.setProducts(apiProducts.items);

console.log('Массив товаров из каталога: ', productsModel.getProducts());

console.log('Ищем товар из массива по id: ', productsModel.getProductById("412bcf81-7e75-4e70-bdb9-d3c73c9803b7"));

productsModel.setSelectedProduct(apiProducts.items[1]);
console.log('Выбранный товар: ', productsModel.getSelectedProduct())

const ShoppingCartModel = new ShoppingCart();

ShoppingCartModel.addItem(apiProducts.items[3]);
ShoppingCartModel.addItem(apiProducts.items[0]);
console.log('Товары в корзине: ', ShoppingCartModel.getShoppingCart());

console.log('Общая стоимость товаров: ', ShoppingCartModel.getTotalPrice());
console.log('Количество товаров в корзине: ', ShoppingCartModel.getItemCount());
console.log('Есть ли товар в корзине: ', ShoppingCartModel.hasItem('854cef69-976d-4c2a-a18c-2aa45046c390'));
console.log('Есть ли товар в корзине: ', ShoppingCartModel.hasItem('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));

ShoppingCartModel.removeItem(apiProducts.items[0]);
console.log('Количество товаров в корзине: ', ShoppingCartModel.getItemCount(), 'товар в корзине: ', ShoppingCartModel.getShoppingCart());

ShoppingCartModel.clearItem()
console.log('Количество товаров в корзине: ', ShoppingCartModel.getItemCount(), 'товар в корзине: ', ShoppingCartModel.getShoppingCart());


const IvanIvanovich = new Buyer;
IvanIvanovich.setEmail('IvanIvanovich.@lol.com');
IvanIvanovich.setAddress('Kazan, Bauman Street 4');
IvanIvanovich.setPhone('89283744837');
IvanIvanovich.setPayment('card');
console.log('Данные покупателя Ивана Ивановича: ', IvanIvanovich.getData());

console.log(IvanIvanovich.validate());

IvanIvanovich.setEmail('');
IvanIvanovich.setAddress('')
console.log(IvanIvanovich.validate());

IvanIvanovich.clearBuyer()
console.log('Данные покупателя Ивана Ивановича: ', IvanIvanovich.getData());


const apiData = new Api(API_URL);

const apiLink = new ApiCommunication(apiData);

apiLink
  .getApi()
  .then((response) => {
    productsModel.setProducts(response.items);
    console.log("Массив с сервера:", productsModel.getProducts());
  })
  .catch((error) => console.log(error));