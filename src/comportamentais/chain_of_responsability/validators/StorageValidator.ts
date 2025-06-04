import { BaseValidator } from "./ComponentValidator";
import { ComputerComponents } from "../components/ComputerComponents";

export class StorageValidator extends BaseValidator {
  public validate(components: ComputerComponents): string[] {
    const errors = [];
    if (!components.storageGB || components.storageGB < 128) {
      errors.push("Armazenamento insuficiente (mínimo 128GB).");
    }
    return errors.concat(super.validate(components));
  }
}
