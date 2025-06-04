import { BaseValidator } from "./ComponentValidator";
import { ComputerComponents } from "../components/ComputerComponents";

export class RAMValidator extends BaseValidator {
  public validate(components: ComputerComponents): string[] {
    const errors = [];
    if (!components.ramGB || components.ramGB < 8) {
      errors.push("Quantidade de RAM insuficiente (mínimo 8GB).");
    }
    return errors.concat(super.validate(components));
  }
}
