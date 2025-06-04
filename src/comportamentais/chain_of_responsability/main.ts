import { ComputerComponents } from "./components/ComputerComponents";
import { CPUValidator } from "./validators/CPUValidator";
import { RAMValidator } from "./validators/RAMValidator";
import { StorageValidator } from "./validators/StorageValidator";
import { PowerSupplyValidator } from "./validators/PowerSupplyValidator";
import { CaseValidator } from "./validators/CaseValidator";

const userPC: ComputerComponents = {
  cpu: "Intel Core i5",
  ramGB: 16,
  storageGB: 256,
  powerSupplyW: 350, 
  case: "Gabinete CoolerMaster"
};

const cpuValidator = new CPUValidator();
const ramValidator = new RAMValidator();
const storageValidator = new StorageValidator();
const psuValidator = new PowerSupplyValidator();
const caseValidator = new CaseValidator();

cpuValidator
  .setNext(ramValidator)
  .setNext(storageValidator)
  .setNext(psuValidator)
  .setNext(caseValidator);

const validationErrors = cpuValidator.validate(userPC);

console.log("Erros encontrados na configuração:");
console.log(validationErrors.length > 0 ? validationErrors : "Nenhum erro encontrado.");
