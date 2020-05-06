export class Order {
  orderid: number;
  date: Date;
  price: number;
  status: string;
  customer: [customer];
  products: [products];
  shipping: [shipping];
}

class customer {
  firstName: string;
  lastName: string;
  email: string;
}

class products {
  price: Number;
  description: String;
  name: String;
  image: String;
  amount: Number;
}

class shipping {
  warehouse: String;
  country: String;
  state: String;
  city: String;
  street: String;
  houseNumber: String;
  arriveDate: Date;
}
