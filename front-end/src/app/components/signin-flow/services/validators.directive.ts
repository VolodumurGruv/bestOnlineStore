import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let isTrue: boolean = false;

    const latAlphabet = [];
    const cyrilicAlphabet = [];

    return isTrue ? { nameValid: { isValid: control.value } } : null;
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRegExp = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z-]{2,4}$/g;
    let isTrue: boolean = false;
    if (control.value) {
      const res = control.value.trim().match(nameRegExp);
      if (res) {
        isTrue = res.join('') === control.value;
      }
    }
    control.parent?.get('email')?.errors;
    return isTrue ? { emailValid: { value: control.value } } : null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRegExp = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z-]{2,4}$/g;
    let isTrue: boolean = false;
    if (control.value) {
      const res = control.value.trim().match(nameRegExp);
      if (res) {
        isTrue = res.join('') === control.value;
      }
    }

    return isTrue ? { passwordValid: { value: false } } : null;
  };
}

export function confirmValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.getRawValue().password;
    return control.value === password
      ? { name: { value: control.value } }
      : null;
  };
}
