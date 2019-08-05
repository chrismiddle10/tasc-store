import { Injectable } from '@angular/core';
import { Product } from './shared/interfaces/Product';

@Injectable( {
	providedIn: 'root'
} )
export class ProductsService {
	constructor() {}

	products: Array<Product> = [
        {
			id: 1,
            desc: '16lb Bag of Skittles',
            caption: 'basket 1',
            image: 'https://pics.drugstore.com/prodimg/436075/900.jpg',
            price: 16.00,
            dutied: false,
            taxed: false
        },
        {
			id: 2,
            desc: 'Walkman',
            image: 'https://flypaper.soundfly.com/wp-content/uploads/2018/06/walkman-header.jpg',
            caption: 'basket 1',
            price: 99.99,
            dutied: false,
            taxed: true
        },
        {
			id: 3,
            desc: 'Bag of Microwave Popcorn',
            caption: 'basket 1',
            image: 'https://ship.frysfood.com/img/Products/500/Kroger/Kroger-Microwave-Popcorn-Movie-Theater-Butter-011110799333.jpg',
            price: 0.99,
            dutied: false,
            taxed: false
        },
        {
			id: 4,
            desc: 'Imported Bag of Vanilla-Hazelnut Coffee',
            caption: 'basket 2',
            image: 'https://cdn11.bigcommerce.com/s-1wdegxjal6/images/stencil/original/products/127/712/HazelnutVanilla--front-2lb__05442.1541796734.jpg',
            price: 11.00,
            dutied: true,
            taxed: false
        },
        {
			id: 5,
            desc: 'Imported Vespa',
            caption: 'basket 2',
            image: 'https://cdp.azureedge.net/products/USA/VSP/2019/SCOOTER/SCOOTER/PRIMAVERA_50TH_ANNIVERSARY_50_CC/50/LIGHT_BLUE/2000000002.jpg',
            price: 15001.25,
            dutied: true,
            taxed: true
        },
        {
			id: 6,
            desc: 'Imported Crate of Almond Snickers',
            caption: 'basket 3',
            image: 'http://cdn.shopify.com/s/files/1/0004/8132/9204/products/snickers-almond3_1022c7dd-5f94-4aea-9d2f-0de868b1a32d_1024x1024.jpg',
            price: 75.99,
            dutied: true,
            taxed: false
        },
        {
			id: 7,
            desc: 'Discman',
            caption: 'basket 3',
            image: 'http://totally-90s.com/wp-content/uploads/2014/02/discman.jpg',
            price: 55.00,
            dutied: false,
            taxed: true
        },
        {
			id: 8,
            desc: 'Imported Bottle of Wine',
            caption: 'basket 3',
            image: 'https://img.alicdn.com/imgextra/i1/60747706/TB2Xre4tXXXXXb2XpXXXXXXXXXX_!!60747706.jpg',
            price: 10.00,
            dutied: true,
            taxed: true
        },
        {
			id: 9,
            desc: '300lb Bag of Fair-Trade Coffee',
            caption: 'basket 3',
            image: 'https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1535478616025-JAT0ANX2GZSQ496NF6X3/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIedjZT6_OBzi2ofH1EqNdNeCRxNMlbxs9807lIebBlcA/Fair+Trade+Coffee+Brands+-+Caf%C3%A9direct?format=500w',
            price: 997.99,
            dutied: false,
            taxed: false
        }
    ]
}
