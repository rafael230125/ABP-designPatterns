import { ComputerComponents } from "./comportamentais/chain_of_responsability/components/ComputerComponents";
import { CPUValidator } from "./comportamentais/chain_of_responsability/validators/CPUValidator";
import { RAMValidator } from "./comportamentais/chain_of_responsability/validators/RAMValidator";
import { StorageValidator } from "./comportamentais/chain_of_responsability/validators/StorageValidator";
import { PowerSupplyValidator } from "./comportamentais/chain_of_responsability/validators/PowerSupplyValidator";
import { CaseValidator } from "./comportamentais/chain_of_responsability/validators/CaseValidator";

import { IComputadorBuilder } from "./criacionais/builder/IComputadorBuilder";
import { ComputadorBuilder } from "./criacionais/builder/ComputadorBuilder";
import { PresetComputadorBuilder } from "./criacionais/builder/PresetComputadorBuilder";

import { IntelFactory, AmdFactory, createComputer } from "./criacionais/abstractfactory/abstractFactory";

/*
EXEMPLOS DE USO - CHAIN OF RESPONSABILITY
*/
const userPC: ComputerComponents = {
  cpu: "Intel Core i5",
  ramGB: 16,
  storageGB: 256,
  powerSupplyW: 450, 
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
// console.log(userPC);

/*
EXEMPLOS DE USOS - BUILDER
*/
const builder: IComputadorBuilder = new ComputadorBuilder();
const pc = builder
  .setProcessador("Intel Core i7-12700K")
  .setPlacaMae("ASUS Z690")
  .setMemoriaRAM("32GB DDR5")
  .setArmazenamento("1TB SSD NVMe")
  .setPlacaDeVideo("NVIDIA RTX 4070")
  .setFonte("750W 80 Plus Gold")
  .setGabinete("Mid Tower com RGB")
  .setSistemaOperacional("Windows 11 Pro")
  .build();
console.log("PC criado via interface:", pc);

const builder2: IComputadorBuilder = new PresetComputadorBuilder("GAMER");
const pcGamer = builder2.build();
console.log("PC Gamer pré-montado:", pcGamer);

/*
EXEMPLO DE USO - ABSTRACT FACTORY
*/
console.log("\n--- Abstract Factory: Montagem de Computadores ---");

const intelPC_AF = createComputer(new IntelFactory());
intelPC_AF.displaySpecs();

const amdPC_AF = createComputer(new AmdFactory());
amdPC_AF.displaySpecs();