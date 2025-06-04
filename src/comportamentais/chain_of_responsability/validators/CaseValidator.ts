import { BaseValidator } from "./ComponentValidator";
import { ComputerComponents } from "../components/ComputerComponents";

export class CaseValidator extends BaseValidator {
  public validate(components: ComputerComponents): string[] {
    const errors = [];
    if (!("case" in components) || !components.case) {
      errors.push("Gabinete não foi selecionado.");
    }
    return errors.concat(super.validate(components));
  }
}
