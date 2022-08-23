import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string): any {


    if(value.length > 20){


      return value.slice(0,20) + '...';
    }else{



      return value;
    }

    
  }

}
