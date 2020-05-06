import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from './order';

const api = '/api';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Array<Order>>(`${api}/orders`);
  }

  deleteOrder(order: Order) {
    return this.http.delete(`${api}/order/${order.orderid}`);
  }

  addOrder(order: Order) {
    return this.http.post<Order>(`${api}/order/`, order);
  }

  updateOrder(order: Order) {
    return this.http.put<Order>(`${api}/order/${order.orderid}`, order);
  }
}
