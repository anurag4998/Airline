import { NG_VALIDATORS, Validator,AbstractControl } from '@angular/forms';

import {Directive, Input} from '@angular/core'

@Directive({
    selector : '[checkpwdvalidator]',
    providers : [{
        provide : NG_VALIDATORS,
        useExisting:Confirmvalidator,
        multi:true
    }]
})

export class Confirmvalidator implements Validator {
    @Input() checkpwdvalidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.checkpwdvalidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }

        return null;
    }
}

