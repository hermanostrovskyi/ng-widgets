import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    const phoneString = phone.toString();
    return `(${phoneString.substring(0, 3)}) ${phoneString.substring(3, 6)}-${phoneString.substring(6)}`;
  }

}
