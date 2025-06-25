// Computador.ts - Classe para criar computadores personalizados
// Representa um computador composto por vários componentes 
// seguindo o padrão Composite


import { ComponenteComposto } from "./ComponenteComposto";
import { ComponenteSimples } from "./ComponenteSimples";

export class Computador extends ComponenteComposto {
  constructor() {
    super("Computador Personalizado");
  }

  // Métodos específicos para facilitar a montagem
  adicionarProcessador(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Processador ${modelo}`, preco, especificacoes));
  }

  adicionarPlacaMae(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Placa-mãe ${modelo}`, preco, especificacoes));
  }

  adicionarMemoriaRAM(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Memória RAM ${modelo}`, preco, especificacoes));
  }

  adicionarArmazenamento(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Armazenamento ${modelo}`, preco, especificacoes));
  }

  adicionarPlacaDeVideo(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Placa de Vídeo ${modelo}`, preco, especificacoes));
  }

  adicionarFonte(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Fonte ${modelo}`, preco, especificacoes));
  }

  adicionarGabinete(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Gabinete ${modelo}`, preco, especificacoes));
  }

  adicionarSistemaOperacional(modelo: string, preco: number): void {
    this.adicionarComponente(new ComponenteSimples(`Sistema Operacional ${modelo}`, preco));
  }

  adicionarCooler(modelo: string, preco: number, especificacoes?: string): void {
    this.adicionarComponente(new ComponenteSimples(`Cooler ${modelo}`, preco, especificacoes));
  }

  // Método para adicionar um kit (componente composto)
  adicionarKit(kit: ComponenteComposto): void {
    this.adicionarComponente(kit);
  }

  obterResumo(): string {
    const componentes = this.obterFilhos();
    if (componentes.length === 0) {
      return "Computador vazio - Nenhum componente adicionado";
    }

    return `=== CONFIGURAÇÃO DO COMPUTADOR ===\n${this.obterDetalhes()}\n\nPreço Total: R$ ${this.obterPrecoTotal().toFixed(2)}`;
  }

  validarConfiguracao(): { valido: boolean; erros: string[] } {
    const componentes = this.obterFilhos();
    const erros: string[] = [];
    const temProcessador       = componentes.some(c => c.nome.includes('Processador'));
    const temPlacaMae          = componentes.some(c => c.nome.includes('Placa-mãe'));
    const temMemoria           = componentes.some(c => c.nome.includes('Memória RAM'));
    const temArmazenamento     = componentes.some(c => c.nome.includes('Armazenamento'));
    const temFonte             = componentes.some(c => c.nome.includes('Fonte'));
    const temGabinete          = componentes.some(c => c.nome.includes('Gabinete'));

    if (!temProcessador)       erros.push("Processador é obrigatório");
    if (!temPlacaMae)          erros.push("Placa-mãe é obrigatória");
    if (!temMemoria)           erros.push("Memória RAM é obrigatória");
    if (!temArmazenamento)     erros.push("Armazenamento é obrigatório");
    if (!temFonte)             erros.push("Fonte é obrigatória");
    if (!temGabinete)          erros.push("Gabinete é obrigatório");

    return {
      valido: erros.length === 0,
      erros
    };
  }
}
