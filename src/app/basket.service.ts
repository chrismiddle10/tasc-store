import { Injectable } from '@angular/core';
import { BasketItem } from './shared/interfaces/BasketItem';
import _ from 'lodash';

const TAX = 0.10;
const DUTY = 0.05;
const TAX_ADJUSTER = 5;

@Injectable( {
	providedIn: 'root'
} )
export class BasketService {
    private items: Array<BasketItem> = [];

    get all() {
        return this.items;
    }

    get count() {
        return this.items.reduce( ( state, o ) => (
            state + o.quantity
        ), 0 );
    }

    get total() {
        const value = this.items.reduce( ( state, o ) => (
            state + o.total
        ), 0.0 );

        return _.round( value, 2 );
    }

    get tax() {
        const value = this.items.reduce( ( state, o ) => (
            state + o.tax
        ), 0.0 );

        return _.round( value, 2 );
    }

    add( item: BasketItem, quantity: number = 1 ) {
        let found = this.items.find( o => o.id === item.id );
        
        // if the given item is not already in the cart,
        // add it to the end of the array and initialize its quantity
        if( found === undefined ) {
            found = this.items[this.items.length] = {
                ...item,
                quantity: 0
            };
        }

        // disallow adjusting quantity to or below zero,
        // use the "remove" method to accomplish this
        if( found.quantity + quantity > 0 ) {
            found.quantity += quantity;
        }

        this.update( found );

        this.total;
        this.tax;
    }

    remove( item: BasketItem ) {
        this.items = this.items.filter( o => o.id !== item.id );

        this.total;
        this.tax;
    }

    update( item: BasketItem ) {
        let base = item.quantity * item.price,
            tax = this.adjustTax( item.taxed ? base * TAX : 0 ),
            duty = this.adjustTax( item.dutied ? base * DUTY : 0 );

        item.tax = tax + duty;
        item.total = _.round( base + tax + duty, 2 );
    }

    clear() {
        this.items = [];
    }

    adjustTax( tax: number ) {
        // remove decimal places
        tax = _.round( tax * 100 );

        // round up
        tax = _.ceil( tax / TAX_ADJUSTER ) * TAX_ADJUSTER;

        // return to 2 decimal places
        return tax / 100;
    }
}

// calcInvoice() {
//     let total = 0.0,
//         totalTax = 0.0;
//
//     return {
//         itemized: this.items.map( o => {
//             let all = o.quantity * o.price,
//                 tax = this.adjustTax( o.taxed ? all * TAX : 0 ),
//                 duty = this.adjustTax( o.dutied ? all * DUTY : 0 ),
//                 taxed = _.round( all + tax + duty, 2 );
//      
//             totalTax += tax + duty;
//             total += taxed;
//
//             return {
//                 ...o,
//                 taxed
//             };
//         } ),
//         totalTax: _.round( totalTax, 2 ),
//         total: _.round( total, 2 )
//     };
// }
//
// log() {
//     // const invoice = this.calcInvoice();
//
//     // console.groupCollapsed( `invoice (${invoice.itemized.length})` );
//
//     // invoice.itemized.forEach( o => {
//     //     console.log( o.desc, o.price, o.taxed );
//     // } );
//
//     // console.log( 'sales tax', invoice.totalTax );
//     // console.log( 'total', invoice.total );
//     // console.groupEnd();
// }
//
// addQuantity( item, inc ) {
//     const found = this.items.find( o => o.id === item.id );
//     if( found ) {
//         if( found.quantity > 1 || inc > 0 ) {
//             found.quantity += inc;
//
//             let all = found.quantity * found.price,
//                 tax = this.adjustTax( found.taxed ? all * TAX : 0 ),
//                 duty = this.adjustTax( found.dutied ? all * DUTY : 0 ),
//                 taxed = _.round( all + tax + duty, 2 );
//
//             found.tax = tax + duty;
//             found.total = taxed;
//         }
//     }
//
//     this.total
//     this.tax
// }
