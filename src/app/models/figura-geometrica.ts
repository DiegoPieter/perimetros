export abstract class FiguraGeometrica {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract calcularPerimetro(): number;
}
