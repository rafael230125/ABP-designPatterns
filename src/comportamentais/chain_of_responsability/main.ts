import { ComputerComponents } from "./components/ComputerComponents";
import { CPUValidator } from "./validators/CPUValidator";
import { RAMValidator } from "./validators/RAMValidator";
import { StorageValidator } from "./validators/StorageValidator";
import { PowerSupplyValidator } from "./validators/PowerSupplyValidator";
import { CaseValidator } from "./validators/CaseValidator";

const cpuValidator = new CPUValidator();
const ramValidator = new RAMValidator();
const storageValidator = new StorageValidator();
const powerSupplyValidator = new PowerSupplyValidator();
const caseValidator = new CaseValidator();

cpuValidator
  .setNext(ramValidator)
  .setNext(storageValidator)
  .setNext(powerSupplyValidator)
  .setNext(caseValidator);

const myComputer: ComputerComponents = {
  cpu: "Intel i7",
  ramGB: 4, 
  storageGB: 256,
  powerSupplyW: 400, 
  case: "", 
};

const errors = cpuValidator.validate(myComputer);

if (errors.length === 0) {
  console.log("✅ Computador válido! Pode montar sem medo!");
} else {
  console.log("❌ Erros na configuração do computador:");
  errors.forEach((error) => console.log("- " + error));
}
