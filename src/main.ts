import './scss/styles.scss';
import './scss/styles.scss';
import Buyer from './components/Models/Buyer.ts'
import ProductCatalog from './components/Models/ProductCatalog.ts'
import ShoppingCart from './components/Models/ShoppingCart.ts'
import { apiProducts } from './utils/data';
import { ApiCommunication } from './components/ApiCommunication/ApiCommunication.ts'
import { Api } from './components/base/Api.ts';
import { API_URL } from './utils/constants.ts'

const productsModel = new ProductCatalog();
productsModel.setProducts(apiProducts.items);

console.log('Массив товаров из каталога: ', productsModel.getProducts());

console.log('Ищем товар из массива по id: ', productsModel.getProductById("412bcf81-7e75-4e70-bdb9-d3c73c9803b7"));

productsModel.setSelectedProduct(apiProducts.items[1]);
console.log('Выбранный товар: ', productsModel.getSelectedProduct())

const shoppingCartModel = new ShoppingCart();

shoppingCartModel.addItem(apiProducts.items[3]);
shoppingCartModel.addItem(apiProducts.items[0]);
console.log('Товары в корзине: ', shoppingCartModel.getShoppingCart());

console.log('Общая стоимость товаров: ', shoppingCartModel.getTotalPrice());
console.log('Количество товаров в корзине: ', shoppingCartModel.getItemCount());
console.log('Есть ли товар в корзине: ', shoppingCartModel.hasItem('854cef69-976d-4c2a-a18c-2aa45046c390'));
console.log('Есть ли товар в корзине: ', shoppingCartModel.hasItem('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));

shoppingCartModel.removeItem(apiProducts.items[0]);
console.log('Количество товаров в корзине: ', shoppingCartModel.getItemCount(), 'товар в корзине: ', shoppingCartModel.getShoppingCart());

shoppingCartModel.clearItem()
console.log('Количество товаров в корзине: ', shoppingCartModel.getItemCount(), 'товар в корзине: ', shoppingCartModel.getShoppingCart());


const ivanIvanovich = new Buyer;
ivanIvanovich.setEmail('IvanIvanovich.@lol.com');
ivanIvanovich.setAddress('Kazan, Bauman Street 4');
ivanIvanovich.setPhone('89283744837');
ivanIvanovich.setPayment('card');
console.log('Данные покупателя Ивана Ивановича: ', ivanIvanovich.getData());

console.log('Проверка на корректность данных (если поле пустое все верно): ', ivanIvanovich.validate());

ivanIvanovich.setEmail('');
ivanIvanovich.setAddress('')
console.log('Проверка на корректность данных: ', ivanIvanovich.validate());

ivanIvanovich.clearBuyer()
console.log('Данные покупателя Ивана Ивановича: ', ivanIvanovich.getData());


const apiData = new Api(API_URL);

const apiLink = new ApiCommunication(apiData);

apiLink
  .getApi()
  .then((response) => {
    productsModel.setProducts(response.items);
    console.log("Массив с сервера:", productsModel.getProducts());
  })
  .catch((error) => console.log(error));