import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BasketService } from '../../basket.service';
import { BasketItem } from '../../shared/interfaces/BasketItem';
import _ from 'lodash';

@Component( {
	selector: '[app-basket-item]',
	templateUrl: './basketItem.component.html',
	styleUrls: ['./basketItem.component.scss'],
	encapsulation: ViewEncapsulation.None
} )
export class BasketItemComponent {
	@Input() 
	public item: BasketItem;

	constructor( private basketService: BasketService ) {}
};