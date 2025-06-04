import { BaseValidator } from "./ComponentValidator";
import { ComputerComponents } from "../components/ComputerComponents";

export class PowerSupplyValidator extends BaseValidator {
  public validate(components: ComputerComponents): string[] {
    const errors = [];
    if (!components.powerSupplyW || components.powerSupplyW < 400) {
      errors.push("Fonte de alimentação insuficiente (mínimo 400W).");
    }
    return errors.concat(super.validate(components));
  }
}
