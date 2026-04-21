import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
