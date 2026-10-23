import { Component } from '@angular/core';
import { NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg,
  IonItem, IonInput, IonButton, IonText,
} from '@ionic/angular';

import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [
    NgIf, DecimalPipe, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg,
    IonItem, IonInput, IonButton, IonText,
  ],
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;

  perimetro: number | null = null;
  mensajeError: string | null = null;

  calcularPerimetro(): void {
    this.perimetro = null;
    this.mensajeError = null;

    const a = Number(this.ladoA);
    const b = Number(this.ladoB);
    const c = Number(this.ladoC);

    if ([this.ladoA, this.ladoB, this.ladoC].some(l => l === null) ||
        [a, b, c].some(l => isNaN(l) || l <= 0)) {
      this.mensajeError = 'Ingrese los tres lados, todos mayores que 0.';
      return;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      this.mensajeError = 'Con esas medidas no se puede formar un triángulo.';
      return;
    }

    const triangulo = new TrianguloEscaleno(a, b, c);
    this.perimetro = triangulo.calcularPerimetro();
  }
}
