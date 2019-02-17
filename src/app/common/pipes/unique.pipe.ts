import {Pipe, PipeTransform} from '@angular/core';
import {WidgetData} from '../mock/data';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(widgetData: any, key: any): any {
    const types  = widgetData.map((dataItem: WidgetData) => {
      const type = dataItem[key].split('');
      return type[0].toUpperCase() + type.splice(1).join('');
    });
    return types.filter((value, index, arr) => arr.indexOf(value) === index);
  }

}
