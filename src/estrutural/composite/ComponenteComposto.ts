// Representa componentes que podem conter outros componentes
import { Componente } from "./Componente";

export class ComponenteComposto implements Componente {
  private componentes: Componente[] = [];

  constructor(public nome: string, public preco: number = 0) {}

  adicionarComponente(componente: Componente): void {
    this.componentes.push(componente);
  }

  removerComponente(componente: Componente): void {
    const index = this.componentes.indexOf(componente);
    if (index > -1) {
      this.componentes.splice(index, 1);
    }
  }

  obterFilhos(): Componente[] {
    return [...this.componentes];
  }

  obterDetalhes(): string {
    if (this.componentes.length === 0) {
      return `${this.nome} (vazio)`;
    }

    const detalhesFilhos = this.componentes
      .map(comp => `  - ${comp.obterDetalhes()}`)
      .join('\n');
    
    return `${this.nome}:\n${detalhesFilhos}`;
  }

  obterPrecoTotal(): number {
    const precoFilhos = this.componentes.reduce(
      (total, comp) => total + comp.obterPrecoTotal(), 
      0
    );
    return this.preco + precoFilhos;
  }
}