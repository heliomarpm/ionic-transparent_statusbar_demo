import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titleColor: string = "danger";
  constructor() {}

  changeTitleColor(color: string) {
    this.titleColor = color;
  }
}
