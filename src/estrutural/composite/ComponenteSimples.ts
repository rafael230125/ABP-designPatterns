// Representa componentes individuais (folhas)
import { Componente } from "./Componente";

export class ComponenteSimples implements Componente {
  constructor(
    public nome: string,
    public preco: number,
    public especificacoes: string = ""
  ) {}

  obterDetalhes(): string {
    return `${this.nome}${this.especificacoes ? ` - ${this.especificacoes}` : ''}`;
  }

  obterPrecoTotal(): number {
    return this.preco;
  }
}