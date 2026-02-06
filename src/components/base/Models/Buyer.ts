import {IBuyer, TPayment} from "../../../types/index";


class Buyer {
  private email: string = '';
  private phone: string = '';
  private address: string = '';
  private payment:TPayment | null = null;
 

constructor() {
    this.payment = null;
    this.email = '';
    this.phone = '';
    this.address = '';
  }

setEmail(email: string): void {
    this.email = email;
}
setPhone(phone: string): void {
    this.phone = phone;
}
setAddress(address: string): void {
    this.address = address;
}
setPayment(payment: TPayment): void {
    this.payment = payment;
}

getData(): IBuyer | null {
  
    if (
      this.email.trim() === '' ||
      this.phone.trim() === '' ||
      this.address.trim() === ''
    ) {
      return null; 
    }

    const buyer: IBuyer = {
      payment: this.payment, 
      email: this.email,
      phone: this.phone,
      address: this.address
    };

    return buyer;
  }
  
  clearBuyer(): void {
  this.payment = null;
  this.email = '';
  this.phone = '';
  this.address = '';
}

validate() {
  const errors: {
    email?: string;
    phone?: string;
    address?: string;
    payment?: string;
  } = {};

  if (this.email.trim() === '') {
    errors.email = 'Укажите email';
  }

  if (this.phone.trim() === '') {
    errors.phone = 'Укажите номер телефона';
  }

  if (this.address.trim() === '') {
    errors.address = 'Укажите адрес';
  }

  if (this.payment === null) {
    errors.payment = 'Не выбран вид оплаты';
  }

  return errors;
}
}

export default Buyer 
