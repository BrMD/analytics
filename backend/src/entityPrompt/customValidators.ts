import { ValidationOptions, registerDecorator } from 'class-validator';
import { validateEmailOrDomain } from 'src/utils';
import { promptTypesEnum } from 'src/types';

export function IsEmailOrWebsite(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isEmailOrWebsite',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const result = validateEmailOrDomain(value);
          return result;
        },
      },
    });
  };
}

export function IsPromptTypes(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsPromptTypes',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (value in promptTypesEnum) return true;
          return false;
        },
      },
    });
  };
}
