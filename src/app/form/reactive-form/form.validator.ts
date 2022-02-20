import { AbstractControl } from "@angular/forms";

// export function   customValidatorFun(control:AbstractControl){
//     if(control.value.match(/[0-9]/g)) console.log('input has inlud number ');
//     return 0;
//   }

export function customValidatorFun(regEx: RegExp) {
    return (control: AbstractControl) => {
        if (control.value.match(regEx)) console.log('input has inlud number ');
        return 0;
    }
}