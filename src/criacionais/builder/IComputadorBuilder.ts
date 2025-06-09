import { Computador } from "./Computador";

export interface IComputadorBuilder {
  setProcessador(processador: string): this;
  setPlacaMae(placaMae: string): this;
  setMemoriaRAM(memoriaRAM: string): this;
  setArmazenamento(armazenamento: string): this;
  setPlacaDeVideo(placaDeVideo: string): this;
  setFonte(fonte: string): this;
  setGabinete(gabinete: string): this;

  setSistemaOperacional(sistemaOperacional: string): this;
  setCooler(cooler: string): this;

  build(): Computador;
}