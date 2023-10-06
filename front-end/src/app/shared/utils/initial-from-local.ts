import { FormGroup } from '@angular/forms';
import { isValid } from './is-valid';

// get initial value from localStorage and apply it to form field
export const setupInitialValue = (form: FormGroup, controls?: any): void => {
  const user = JSON.parse(localStorage.getItem('user')!);
  const address = JSON.parse(localStorage.getItem('address')!);
  console.log(controls);
  console.log(address);

  if (controls) {
    for (const control in controls) {
      if (control !== 'password') {
        form.get(control)?.setValue(controls[control]);
        isValid(form, control);
      }
    }
  }

  // for (const key in user) {
  //   if (form.get(key) && user[key]) {
  //     form.get(key)?.setValue(user[key]);
  //     isValid(form, key);
  //   }
  // }

  // for (const key in address) {
  //   if (form.get(key) && address[key]) {
  //     form.get(key)?.setValue(address[key]);
  //     isValid(form, key);
  //   }
  // }
};

// export const updateLocalStorage = (payload: any) => {
//   const currentUser = JSON.parse(localStorage.getItem('user')!);

//   for (let item in payload) {
//     currentUser[item] = payload[item];
//   }
//   console.log(currentUser);
//   localStorage.setItem('user', JSON.stringify(currentUser));
// };
