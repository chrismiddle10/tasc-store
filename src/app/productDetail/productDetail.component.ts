import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { BasketService } from '../basket.service';
import { Product } from '../shared/interfaces/Product';
import {ActivatedRoute} from '@angular/router';

@Component( {
	selector: 'app-product-detail',
	templateUrl: './productDetail.component.html',
	styleUrls: ['./productDetail.component.scss']
} )
export class ProductDetailComponent implements OnInit {
	product: Product;

	constructor( private productsService: ProductsService, private basketService: BasketService, private route: ActivatedRoute ) {}

	ngOnInit() {
		let productId = this.route.snapshot.params['productId'];
		if( productId ) {
			productId = parseInt( productId );
		}

		if( productId ) {
			this.product = this.productsService.products.find( o => o.id === productId );
		} else {
			productId = 0;
		}
	}

	addToBasket( product ) {
		this.basketService.add( product );
	}
}