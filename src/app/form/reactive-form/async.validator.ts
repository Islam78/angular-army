import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from 'rxjs/operators';

export function UserNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return checkUserName().pipe(
            map(res => {
                console.log('in res', res);

                return res.username === control.value ? { userNameExist: true } : null
            })
        )
    }
    function checkUserName(): Observable<any> {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/users/1').pipe()
    }
}

function delay(arg0: number): import("rxjs").OperatorFunction<unknown, any> {
    throw new Error("Function not implemented.");
}
