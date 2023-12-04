import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  addProduct = new FormGroup({
    product_image : new FormControl('',[Validators.required]),
    product_name : new FormControl('',[Validators.required, Validators.minLength(3)]),
    product_price : new FormControl('',[Validators.required,]),
  })

  get product_image () {  return this.addProduct.get('product_image'); }
  get product_name () {  return this.addProduct.get('product_name'); }
  get product_price () {  return this.addProduct.get('product_price'); }

  saveProduct()
  {

  }
}
