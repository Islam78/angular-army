import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sun',
  pure:false // لو عاوزة يشتغل بعد كل تغيير حصل ف الاراي 
})
export class SunPipe implements PipeTransform {

  transform(list: any[], proparety: string): any {
    return list.reduce((a, b) => { return a + b[proparety] }, 0);
  }

}
