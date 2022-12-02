import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
    // ^[a-zA-Z]{6,}@gmail\.(com|bg)$
    const domainString = domains.join('|');
    const re = new RegExp(`^[a-zA-Z]{6,}@gmail\.(${domainString})$`);
    return (control) => {
        return (control.value === '' || re.test(control.value)) ? null : { appEmailValidator: true };
    }
}