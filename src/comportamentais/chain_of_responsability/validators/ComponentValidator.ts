import { ComputerComponents } from "../components/ComputerComponents";

export interface ComponentValidator {
  setNext(validator: ComponentValidator): ComponentValidator;
  validate(components: ComputerComponents): string[];
}

export abstract class BaseValidator implements ComponentValidator {
  private nextValidator?: ComponentValidator;

  public setNext(validator: ComponentValidator): ComponentValidator {
    this.nextValidator = validator;
    return validator;
  }

  public validate(components: ComputerComponents): string[] {
    if (this.nextValidator) {
      return this.nextValidator.validate(components);
    }
    return [];
  }
}
