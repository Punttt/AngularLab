import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './partials/main-header/main-header';
import { MainFooter } from './partials/main-footer/main-footer';
import { Hero } from './partials/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader, MainFooter, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularLab');
}
