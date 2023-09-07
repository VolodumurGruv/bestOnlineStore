import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let isTrue: boolean = false;
    // it should pass only letters and white spaces
    const regExp = /[A-Za-z]+[^0-1]\b/g;
    let res!: string[] | null;

    if (control.value) {
      res = control.value.match(regExp);

      if (res) {
        isTrue = res.join('') === control.value;
      }
    }

    return !isTrue
      ? { name: { message: "ім'я може містити лише букви" } }
      : null;
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
    return !isTrue ? { email: { message: 'введіть коректний e-mail' } } : null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    let isTrue: boolean = false;
    if (control.value) {
      const res = control.value.trim().match(nameRegExp);
      if (res) {
        isTrue = res.join('') === control.value;
      }
    }

    return !isTrue
      ? {
          password: {
            message:
              'Пароль має містити хочаб один символ, одну заголовну літеру та цифру',
          },
        }
      : null;
  };
}

export function confirmValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.getRawValue().password;
    console.log(password === control.value);
    return control.value !== password
      ? { confirmPassword: { message: 'паролі мають збігатися' } }
      : null;
  };
}
