import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'main-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {}
