import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './productDetail.component';

describe( 'ProductDetailComponent', () => {
	let component: ProductDetailComponent;
	let fixture: ComponentFixture<ProductDetailComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule({
			declarations: [ProductDetailComponent],
			imports: [RouterTestingModule]
		} ).compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent(ProductDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
