import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import _ from 'lodash';

@Component( {
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
} )
export class BasketComponent {
	constructor( private basketService: BasketService ) {}
};