/**
 * file to put common level methods, enums, types, etc.
 *
 * @export
 * @enum {number}
 */

import { FormGroup } from '@angular/forms';
import { FormPageScreenTitleMap } from './main/form-page/form-page-data';

export enum FormStatus {
  VALID = 'VALID',
  INVALID = 'INVALID',
}

export interface ScreenNameDropDown {
  screenCode: string;
  screenName: string;
}

export function getFormControlValue(formControlName: string, formGroup: FormGroup): any {
  return formGroup && formGroup.controls && formGroup.controls[formControlName]
    ? formGroup.controls[formControlName].value
    : null;
}

export function getFormControl(formControlName: string, formGroup: FormGroup): any {
  return formGroup && formGroup.controls && formGroup.controls[formControlName]
    ? formGroup.controls[formControlName]
    : null;
}

export function setFormControlValue(formControlName: string, valueToBeset: any, formGroup: FormGroup): void {
  if (formGroup && formGroup.controls && formGroup.controls[formControlName]) {
    formGroup.controls[formControlName].setValue(valueToBeset);
    formGroup.controls[formControlName].markAsDirty();
    formGroup.controls[formControlName].updateValueAndValidity();
  }
}

export function openUrlInNewTab(url: string) {
  if (url) {
    url = !(url.includes('http') || url.includes('https')) ? 'http://' + url : url;
    window.open(url, '_blank');
  }
}

export function getScreenNameDropdownList(): ScreenNameDropDown[] {
  return Object.keys(FormPageScreenTitleMap).map((screenCode: string) => 
    {
      return {
        screenCode: screenCode,
        screenName: FormPageScreenTitleMap[screenCode]
      }
    }
  );
}

export function getStateList(): string[] {
  return [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Other'
  ]
}