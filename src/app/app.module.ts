import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket/basketItem/basketItem.component';
import { BasketService } from './basket.service';
import { ProductsService } from './products.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
	{ 
		path: 'basket',      
		component: BasketComponent 
	},
	{ 
		path: 'products',      
		component: ProductsComponent 
	},
	{ 
		path: 'products/:productId',      
		component: ProductDetailComponent 
	},
	{ 
		path: '',      
		component: HomeComponent 
	},
	{ 
		path: '**',      
		component: PageNotFoundComponent 
	}
];

@NgModule( {
	declarations: [
		AppComponent,
		BasketComponent,
		BasketItemComponent,
		ProductsComponent,
		ProductDetailComponent,
		PageNotFoundComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot( appRoutes )
	],
	providers: [
		BasketService,
		ProductsService
	],
	bootstrap: [
		AppComponent
	]
} )
export class AppModule { 

}
