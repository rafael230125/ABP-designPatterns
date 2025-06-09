export class Computador {
  constructor(
    public processador: string,
    public placaMae: string,
    public memoriaRAM: string,
    public armazenamento: string,
    public placaDeVideo: string,
    public fonte: string,
    public gabinete: string,
    public sistemaOperacional?: string,
    public cooler?: string,
  ) {}
}