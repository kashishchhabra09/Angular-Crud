import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    const filteredItems = items.filter(item => {
      return (
        item.id.toString().toLowerCase().includes(searchText) ||
        item.name.toLowerCase().includes(searchText) ||
        item.city.toLowerCase().includes(searchText) ||
        item.country.toLowerCase().includes(searchText)
      );
    });
  
    if (filteredItems.length === 0) {

      return [{ id:' No Data Found ' }];
    }
  
    return filteredItems;
  }

}







// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
