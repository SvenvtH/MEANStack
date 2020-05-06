import { Component, OnInit } from '@angular/core';

import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  addingOrder = false;
  orders: any = [];
  selectedOrder: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
  }

  cancel() {
    this.addingOrder = false;
    this.selectedOrder = null;
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order).subscribe(res => {
      this.orders = this.orders.filter(o => o !== order);
      if (this.selectedOrder === order) {
        this.selectedOrder = null;
      }
    });
  }

  getOrders() {
    return this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  enableAddMode() {
    this.addingOrder = true;
    this.selectedOrder = new Order();
  }

  onSelect(order: Order) {
    this.addingOrder = false;
    this.selectedOrder = order;
  }

  save() {
    if (this.addingOrder) {
      this.orderService.addOrder(this.selectedOrder).subscribe(order => {
        this.addingOrder = false;
        this.selectedOrder = null;
        this.orders.push(order);
      });
    } else {
      this.orderService.updateOrder(this.selectedOrder).subscribe(order => {
        this.addingOrder = false;
        this.selectedOrder = null;
      });
    }
  }
}
