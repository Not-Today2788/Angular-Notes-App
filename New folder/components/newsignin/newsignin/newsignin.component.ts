import { Component } from '@angular/core';

@Component({
  selector: 'app-newsignin',
  templateUrl: './newsignin.component.html',
  styleUrls: ['./newsignin.component.scss']
})
export class NewsigninComponent {
  hide = true;

  constructor() { }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}