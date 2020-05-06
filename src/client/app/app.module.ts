import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { OrderService } from './order.service';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
