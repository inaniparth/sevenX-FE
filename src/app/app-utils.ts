/**
 * file to put common level methods, enums, types, etc.
 *
 * @export
 * @enum {number}
 */

import { FormGroup } from '@angular/forms';

export enum FormStatus {
  VALID = 'VALID',
  INVALID = 'INVALID',
}

export function getFormControlValue(formControlName: string, formGroup: FormGroup): any {
  return formGroup && formGroup.controls && formGroup.controls[formControlName]
    ? formGroup.controls[formControlName].value
    : null;
}
