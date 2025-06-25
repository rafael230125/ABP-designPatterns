export interface Componente {
  nome: string;
  preco: number;
  obterDetalhes(): string;
  obterPrecoTotal(): number;
  adicionarComponente?(componente: Componente): void;
  removerComponente?(componente: Componente): void;
  obterFilhos?(): Componente[];
}