import { IComputadorBuilder } from "./IComputadorBuilder";
import { Computador } from "./Computador"; 

// Builder principal, cria um pc de forma personalizada

export class ComputadorBuilder implements IComputadorBuilder {
  private _processador?: string;
  private _placaMae?: string;
  private _memoriaRAM?: string;
  private _armazenamento?: string;
  private _placaDeVideo?: string;
  private _fonte?: string;
  private _gabinete?: string;

  private _sistemaOperacional?: string;
  private _cooler?: string;

  setProcessador(processador: string): this {
    this._processador = processador;
    return this;
  }

  setPlacaMae(placaMae: string): this {
    this._placaMae = placaMae;
    return this;
  }

  setMemoriaRAM(memoriaRAM: string): this {
    this._memoriaRAM = memoriaRAM;
    return this;
  }

  setArmazenamento(armazenamento: string): this {
    this._armazenamento = armazenamento;
    return this;
  }

  setPlacaDeVideo(placaDeVideo: string): this {
    this._placaDeVideo = placaDeVideo;
    return this;
  }

  setFonte(fonte: string): this {
    this._fonte = fonte;
    return this;
  }

  setGabinete(gabinete: string): this {
    this._gabinete = gabinete;
    return this;
  }

  setSistemaOperacional(sistemaOperacional: string): this {
    this._sistemaOperacional = sistemaOperacional;
    return this;
  }

  setCooler(cooler: string): this {
    this._cooler = cooler;
    return this;
  }

  build(): Computador {
    if (
      !this._processador ||
      !this._placaMae ||
      !this._memoriaRAM ||
      !this._armazenamento ||
      !this._placaDeVideo ||
      !this._fonte ||
      !this._gabinete
    ) {
      throw new Error("Todos os componentes obrigatórios devem ser definidos.");
    }

    return new Computador(
      this._processador,
      this._placaMae,
      this._memoriaRAM,
      this._armazenamento,
      this._placaDeVideo,
      this._fonte,
      this._gabinete,
      this._sistemaOperacional,
      this._cooler,
    );
  }
}