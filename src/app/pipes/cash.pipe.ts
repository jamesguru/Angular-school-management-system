import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cash'
})
export class CashPipe implements PipeTransform {

  transform(value: number):string | number {



    if(value > 1000){



      if(value.toString().length < 5){

        return value.toString().slice(0,1) + 'K'
      }


      return value.toString().slice(0,2) + 'K'
    }

    return value;
  }

}
