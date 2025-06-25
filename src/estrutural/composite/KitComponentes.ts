// KitComponentes.ts - Classe para criar kits pré-definidos 
// de componentes, representando um kit de computador completo  
   
import { ComponenteComposto } from "./ComponenteComposto";
import { ComponenteSimples } from "./ComponenteSimples";    

export class KitComponentes extends ComponenteComposto {
  static criarKitGamer(): KitComponentes {
    const kit = new KitComponentes("Kit Gamer", 500); // Taxa do kit
    
    kit.adicionarComponente(new ComponenteSimples("Processador Intel Core i9-13900K", 3500, "3.0-5.8GHz, 24 cores"));
    kit.adicionarComponente(new ComponenteSimples("Placa-mãe ASUS Z790", 1200, "Socket LGA1700, DDR5"));
    kit.adicionarComponente(new ComponenteSimples("Memória RAM 64GB DDR5", 2000, "6000MHz, RGB"));
    kit.adicionarComponente(new ComponenteSimples("Armazenamento 2TB SSD NVMe", 800, "PCIe 4.0, 7000MB/s"));
    kit.adicionarComponente(new ComponenteSimples("Placa de Vídeo NVIDIA RTX 4090", 8000, "24GB GDDR6X"));
    kit.adicionarComponente(new ComponenteSimples("Fonte 1000W", 600, "80 Plus Platinum, Modular"));
    kit.adicionarComponente(new ComponenteSimples("Gabinete Full Tower RGB", 400, "Vidro temperado, 6 fans"));
    kit.adicionarComponente(new ComponenteSimples("Sistema Operacional Windows 11 Pro", 700));
    kit.adicionarComponente(new ComponenteSimples("Cooler Water Cooler 360mm", 800, "RGB, Intel/AMD"));

    return kit;
  }

  static criarKitBasico(): KitComponentes {
    const kit = new KitComponentes("Kit Básico", 100);
    
    kit.adicionarComponente(new ComponenteSimples("Processador Intel Core i3-12100", 800, "3.3-4.3GHz, 4 cores"));
    kit.adicionarComponente(new ComponenteSimples("Placa-mãe Gigabyte B660M", 400, "Socket LGA1700, DDR4"));
    kit.adicionarComponente(new ComponenteSimples("Memória RAM 8GB DDR4", 200, "3200MHz"));
    kit.adicionarComponente(new ComponenteSimples("Armazenamento 256GB SSD", 150, "SATA III"));
    kit.adicionarComponente(new ComponenteSimples("Fonte 400W", 200, "80 Plus Bronze"));
    kit.adicionarComponente(new ComponenteSimples("Gabinete Mini Tower", 150, "Micro-ATX"));
    kit.adicionarComponente(new ComponenteSimples("Sistema Operacional Windows 10 Home", 500));

    return kit;
  }

  static criarKitServidor(): KitComponentes {
    const kit = new KitComponentes("Kit Servidor", 1000);
    
    kit.adicionarComponente(new ComponenteSimples("Processador Intel Xeon E-2336", 2500, "2.9-4.8GHz, 6 cores"));
    kit.adicionarComponente(new ComponenteSimples("Placa-mãe Supermicro X12", 1500, "Socket LGA1200, ECC"));
    kit.adicionarComponente(new ComponenteSimples("Memória RAM 128GB ECC DDR4", 4000, "2933MHz, Error Correction"));
    kit.adicionarComponente(new ComponenteSimples("Armazenamento 4TB SSD Enterprise", 3000, "NVMe, Alta durabilidade"));
    kit.adicionarComponente(new ComponenteSimples("Fonte 850W Redundant", 1200, "80 Plus Platinum, Dupla"));
    kit.adicionarComponente(new ComponenteSimples("Gabinete Rack 2U", 800, "19 polegadas, Montagem rack"));
    kit.adicionarComponente(new ComponenteSimples("Sistema Operacional Ubuntu Server 22.04", 0, "Gratuito"));
    kit.adicionarComponente(new ComponenteSimples("Cooler Industrial", 300, "Alta performance, baixo ruído"));

    return kit;
  }
}