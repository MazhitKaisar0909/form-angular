import { FormControl } from '@angular/forms';

export interface IForm {
    readonly firstName: FormControl<string | null>;
    readonly lastName: FormControl<string | null>;
    readonly email: FormControl<string | null>;
    readonly phone: FormControl<number | null>;
    readonly zipCode: FormControl<number | null>;
    readonly city: FormControl<string | null>;
    readonly state: FormControl<string | null>;
    readonly street1: FormControl<string | null>;
    readonly street2: FormControl<string | null>;
}

export interface IFormData {
    readonly firstName: string | undefined;
    readonly lastName: string | undefined;
    readonly email: string | undefined;
    readonly phone: number | undefined | null;
    readonly zipCode: number | undefined | null;
    readonly city: string | undefined;
    readonly state: string | undefined;
    readonly street1: string | undefined;
    readonly street2: string | undefined;

}