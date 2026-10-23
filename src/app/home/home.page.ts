import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonSelect, IonSelectOption,
} from '@ionic/angular';

import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgIf, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonSelect, IonSelectOption,
    CirculoComponent, TrianguloComponent,
  ],
})
export class HomePage {
  figuraSeleccionada: string | null = null;
}
