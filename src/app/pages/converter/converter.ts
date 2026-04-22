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
  resCelsius: number = 0;

  // Fahrenheit
  fahrenheit: number = 0;
  resFahrenheit: number = 0;

  // Meter
  meter: number = 0;
  resMeter: number = 0;

  // Feet
  feet: number = 0;
  resFeet: number = 0;

  // Metoder

  // Celsius -> Fahrenhe
  convertCelsius(): void {
    this.resCelsius = (this.celsius*1.8)+32;
  }

  // Fahreheit -> Celsius
  convertFahrenheit(): void {
    this.resFahrenheit = (this.fahrenheit-32)/1.8;
  }

  // Meter -> Feet
  convertMeter(): void {
    this.resMeter = this.meter*3.281;
  }

  // Feet -> Meter
  convertFeet(): void {
    this.resFeet = this.feet/3.281;
  }
}
