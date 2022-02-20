import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'defaultImage' })
export class DefaultImg implements PipeTransform {
    transform(value: any, DefaultValue) {
        console.log('in pip img', value);
        return value ? value : DefaultValue
    }

}