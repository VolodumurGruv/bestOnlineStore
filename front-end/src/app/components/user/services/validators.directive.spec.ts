import { nameValidator } from './validators.directive';

describe('nameValidatorFn', () => {
  it('should create an instance', () => {
    const directive = nameValidator();
    expect(directive).toBeTruthy();
  });
});
