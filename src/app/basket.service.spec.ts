import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import { ProductsService } from './products.service';

describe( 'BasketService', () => {
	beforeEach( () => TestBed.configureTestingModule({}) );

	it( 'should be created', () => {
		const service: BasketService = TestBed.get( BasketService );
		expect( service ).toBeTruthy();
	} );

	it( 'verify basket 1', () => {
		let productsService = TestBed.get( ProductsService ),
			basketService = TestBed.get( BasketService );

		basketService.items = [];

		let products1 = productsService.products.filter( o => o.caption === 'basket 1' );
		expect( products1.length ).toBe( 3 );

		products1.forEach( o => basketService.add( o ) );

		let item1 = basketService.all.find( o => o.id === 1 );
		expect( item1.tax ).toBe( 0.00 );
		expect( item1.total ).toBe( 16.00 );

		let item2 = basketService.all.find( o => o.id === 2 );
		expect( item2.tax ).toBe( 10.00 );
		expect( item2.total ).toBe( 109.99 );

		let item3 = basketService.all.find( o => o.id === 3 );
		expect( item3.tax ).toBe( 0 );
		expect( item3.total ).toBe( 0.99 );
		
		expect( basketService.tax ).toBe( 10.00 );
		expect( basketService.total ).toBe( 126.98 );
	} );

	it( 'verify basket 2', () => {
		let productsService = TestBed.get( ProductsService ),
			basketService = TestBed.get( BasketService );

		basketService.items = [];
		
		let products2 = productsService.products.filter( o => o.caption === 'basket 2' );
		expect( products2.length ).toBe( 2 );	

		products2.forEach( o => basketService.add( o ) );	

		let item4 = basketService.all.find( o => o.id === 4 );
		expect( item4.tax ).toBe( 0.55 );
		expect( item4.total ).toBe( 11.55 );
		
		let item5 = basketService.all.find( o => o.id === 5 );
		expect( item5.tax ).toBe( 2250.25 );
		expect( item5.total ).toBe( 17251.50 );
		
		expect( basketService.tax ).toBe( 2250.80 );
		expect( basketService.total ).toBe( 17263.05 );
	} );

	it( 'verify basket 3', () => {
		let productsService = TestBed.get( ProductsService ),
			basketService = TestBed.get( BasketService );

		basketService.items = [];

		let products3 = productsService.products.filter( o => o.caption === 'basket 3' );
		expect( products3.length ).toBe( 4 );

		products3.forEach( o => basketService.add( o ) );

		let item6 = basketService.all.find( o => o.id === 6 );
		expect( item6.tax ).toBe( 3.80 );
		expect( item6.total ).toBe( 79.79 );
		
		let item7 = basketService.all.find( o => o.id === 7 );
		expect( item7.tax ).toBe( 5.50 );
		expect( item7.total ).toBe( 60.50 );
		
		let item8 = basketService.all.find( o => o.id === 8 );
		expect( item8.tax ).toBe( 1.50 );
		expect( item8.total ).toBe( 11.50 );
		
		let item9 = basketService.all.find( o => o.id === 9 );
		expect( item9.tax ).toBe( 0 );
		expect( item9.total ).toBe( 997.99 );

		expect( basketService.tax ).toBe( 10.80 );	
		expect( basketService.total ).toBe( 1149.78 );
	} );

	it( 'should adjustTax to nearest $0.05', () => {
		let basketService = TestBed.get( BasketService );

		expect( basketService.adjustTax( 0.0 ) ).toBe( 0.0 );
		expect( basketService.adjustTax( 0.98 ) ).toBe( 1.0 );
		expect( basketService.adjustTax( 0.059 ) ).toBe( 0.1 );
		expect( basketService.adjustTax( 0.03 ) ).toBe( 0.05 );
		expect( basketService.adjustTax( 0.06 ) ).toBe( 0.1 );
	} );
} );
