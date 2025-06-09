import { IComputadorBuilder } from "./IComputadorBuilder";
import { Computador } from "./Computador";

// Builder que cria pcs com base em um preset, para demonstrar o uso do padrão com interface
export class PresetComputadorBuilder implements IComputadorBuilder {
  private computador: Computador | null = null;

  constructor(preset: "GAMER" | "BASICO" | "SERVIDOR") {
    if (preset === "GAMER") {
      this.computador = new Computador(
        "Intel Core i9-13900K",
        "ASUS Z790",
        "64GB DDR5",
        "2TB SSD NVMe",
        "NVIDIA RTX 4090",
        "1000W 80 Plus Platinum",
        "Full Tower RGB",
        "Windows 11 Pro",
        "Water Cooler 360mm"
      );
    } else if (preset === "BASICO") {
      this.computador = new Computador(
        "Intel Core i3-12100",
        "Gigabyte B660M",
        "8GB DDR4",
        "256GB SSD",
        "Integrada",
        "400W",
        "Mini Tower",
        "Windows 10 Home"
      );
    } else if (preset === "SERVIDOR") {
      this.computador = new Computador(
        "Intel Xeon E-2336",
        "Supermicro X12",
        "128GB ECC DDR4",
        "4TB SSD Enterprise",
        "Integrada",
        "850W Redundant",
        "Rack 2U",
        "Ubuntu Server 22.04",
        "Cooler industrial"
      );
    }
  }

  private throwError(): never {
    throw new Error("Não é possível alterar peças: PC pré-montado");
  }

  setProcessador(): this { this.throwError(); }
  setPlacaMae(): this { this.throwError(); }
  setMemoriaRAM(): this { this.throwError(); }
  setArmazenamento(): this { this.throwError(); }
  setPlacaDeVideo(): this { this.throwError(); }
  setFonte(): this { this.throwError(); }
  setGabinete(): this { this.throwError(); }
  setSistemaOperacional(): this { this.throwError(); }
  setCooler(): this { this.throwError(); }
  setLeitorDVD(): this { this.throwError(); }

  build(): Computador {
    if (!this.computador) {
      throw new Error("Preset inválido ou não definido.");
    }
    return this.computador;
  }
}