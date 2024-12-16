export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
}