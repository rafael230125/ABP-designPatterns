import { BaseValidator } from "./ComponentValidator";
import { ComputerComponents } from "../components/ComputerComponents";

export class CPUValidator extends BaseValidator {
  public validate(components: ComputerComponents): string[] {
    const errors = [];
    if (!components.cpu) {
      errors.push("CPU não foi selecionada.");
    }
    return errors.concat(super.validate(components));
  }
}
