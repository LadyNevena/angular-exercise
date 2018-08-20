import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    
    if (!items) {
		return [];
    }
    if (!field || !value) {
    	return items;
    }
    
	let fields: string[] = field.split(' ');
	
	    
    return items.filter(singleItem => {
                        	for (let f of fields) {
                        		if (f.includes('.') == true) {
                        			let item: string[] = f.split('.'); 
                        			if (((singleItem[item[0]])[item[1]].toLowerCase().includes(value.toLowerCase())) == true) {
            							return true;
        							}
                        			}else if ((singleItem[f].toLowerCase().includes(value.toLowerCase())) == true) {
            							return true;
        							}
        						}
        						return false;
                        });
   }
}
