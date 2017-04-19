import { Component } from '@angular/core';

@Component({
  selector: 'aj-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})
export class SignUpComponent {
  step: number = 1;

  nextStep() {
    this.step = ++this.step;
  }
}
