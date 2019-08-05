import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { BasketService } from '../basket.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	constructor( private productsService: ProductsService, private basketService: BasketService ) { 

	}

	ngOnInit() {

	}

	addToBasket( product ) {
		this.basketService.add( product );
	}
}


// <!-- <tasc-basket [index]="0"></tasc-basket>
// 	<tasc-basket [index]="1"></tasc-basket>
// 	<tasc-basket [index]="2"></tasc-basket> -->