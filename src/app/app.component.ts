import { Component, enableProdMode } from '@angular/core';
import { BasketService } from './basket.service';
enableProdMode();

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
} )
export class AppComponent {
	constructor( private basketService: BasketService ) {}
};