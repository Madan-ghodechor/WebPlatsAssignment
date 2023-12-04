import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  quantity:any = 1;
  inc(num:any)
  {
    this.quantity+=num;
  }
  dec(num:any)
  {
    this.quantity-=num;
  }
}
