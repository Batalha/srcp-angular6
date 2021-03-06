import {Directive, Input} from '@angular/core';
import {Validators, AbstractControl, ValidationErrors, NG_VALIDATORS} from "@angular/forms";
import {Subscription} from 'rxjs/index';

@Directive({
    selector: '[compare]',
    providers: [{provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true}]
})
export class CompareValidatorDirective implements Validators {

    @Input('compare') controlNameToCompare: string;

    validate(c: AbstractControl): ValidationErrors | null {
            // console.log(c.value === null)
        // if (c.value === null || c.value === 0){
        //     return null;
        // }else{
            const controlToCompare = c.root.get(this.controlNameToCompare);
            if (controlToCompare) {
                const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
                    c.updateValueAndValidity();
                    subscription.unsubscribe();
                });
            }
            return controlToCompare && controlToCompare.value !== c.value ? {'compare': true} : null;
        // }
    }
}
