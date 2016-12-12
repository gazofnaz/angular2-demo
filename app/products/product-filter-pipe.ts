import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{

    transform(productsArray: IProduct[], filterBy: string): IProduct[]{
        
        // The Will Self of programmers.
        // Why write simple & readable code when you can show off your mad skillz in a single line?
        // 
        //    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        //    return filterBy ? productsArray.filter((product:IProduct) =>
        //    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : productsArray;

        // no string was entered, return the original array
        if( ! filterBy ){
            return productsArray;
        }

        // normalize the string for case insensitive comparisons
        filterBy = filterBy.toLocaleLowerCase();

        // function used in callback to check if filter string is matched in the 
        // in the product which is passed as a parameter
        var productNameHasSubstring = function( product:IProduct ): boolean{
            
            var match = false;
            
            // check if substring exist in productName
            if( product.productName.toLocaleLowerCase().indexOf( filterBy ) !== -1 ){
                match = true;
            }
            
            return match;
        }
        
        // the function above isn't executed until it is passed into here.
        // filter operates on every value in the array. If the conditional is true, the value is kept
        var matchedproductsArray = productsArray.filter( productNameHasSubstring ); 

        // return all products that match our filter
        return matchedproductsArray;
    }

}

