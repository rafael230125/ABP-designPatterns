import { Computador } from "./Computador";
import { KitComponentes } from "./KitComponentes";  

console.log("=== EXEMPLO 1: Computador Personalizado ===");
const pcPersonalizado = new Computador();

pcPersonalizado.adicionarProcessador("AMD Ryzen 7 5800X", 1500, "3.8-4.7GHz, 8 cores");
pcPersonalizado.adicionarPlacaMae("MSI B550", 600, "Socket AM4, DDR4");
pcPersonalizado.adicionarMemoriaRAM("32GB DDR4", 800, "3600MHz, RGB");
pcPersonalizado.adicionarArmazenamento("1TB SSD NVMe", 400, "PCIe 3.0");
pcPersonalizado.adicionarPlacaDeVideo("NVIDIA RTX 3070", 3000, "8GB GDDR6");
pcPersonalizado.adicionarFonte("750W", 400, "80 Plus Gold");
pcPersonalizado.adicionarGabinete("Mid Tower", 250, "ATX, RGB");
pcPersonalizado.adicionarSistemaOperacional("Windows 11 Home", 600);

console.log(pcPersonalizado.obterResumo());
console.log("\n");

console.log("=== EXEMPLO 2: Kit Gamer Pré-configurado ===");
const pcGamer = new Computador();
const kitGamer = KitComponentes.criarKitGamer();
pcGamer.adicionarKit(kitGamer);
console.log(pcGamer.obterResumo());
console.log("\n");

console.log("=== EXEMPLO 3: Validação de Configuração ===");
const pcIncompleto = new Computador();
pcIncompleto.adicionarProcessador("Intel i5", 1000);

const validacao = pcIncompleto.validarConfiguracao();
console.log(`Configuração válida: ${validacao.valido}`);

if (!validacao.valido) {
    console.log("Erros encontrados:");
    validacao.erros.forEach(erro => console.log(`- ${erro}`));
}

console.log("\n=== EXEMPLO 4: Misturando Kits e Componentes Individuais ===");
const pcMisto = new Computador();
const kitBasico = KitComponentes.criarKitBasico();
pcMisto.adicionarKit(kitBasico);

// Upgrades no kit básico
pcMisto.adicionarPlacaDeVideo("NVIDIA GTX 1660", 1500, "6GB GDDR5 - Upgrade");
pcMisto.adicionarMemoriaRAM("16GB DDR4 Adicional", 400, "3200MHz - Expansão");

console.log(pcMisto.obterResumo());
