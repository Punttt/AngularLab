import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.scss',
})
export class Converter {
  // Celsius
  celsius: number = 0;
  resCel: number = 0;

  // Fahrenheit
  fahrenheit: number = 0;
  resFahr: number = 0;

  // Meter
  meter: number = 0;
  resMet: number = 0;

  // Feet
  feet: number = 0;
  resFeet: number = 0;
}
