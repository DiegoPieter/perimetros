import { Component } from '@angular/core';
import { NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg,
  IonItem, IonInput, IonButton, IonText,
} from '@ionic/angular';

import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [
    NgIf, DecimalPipe, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg,
    IonItem, IonInput, IonButton, IonText,
  ],
})
export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;
  mensajeError: string | null = null;

  calcularPerimetro(): void {
    this.perimetro = null;
    this.mensajeError = null;

    const radio = Number(this.radio);
    if (this.radio === null || isNaN(radio) || radio <= 0) {
      this.mensajeError = 'Ingrese un radio mayor que 0.';
      return;
    }

    const circulo = new Circulo(radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}
