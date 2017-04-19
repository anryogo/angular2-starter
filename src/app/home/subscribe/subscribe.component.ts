import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ValidatorService } from 'core/services';
import { RULES } from 'assets/data/rules';

@Component({
  selector: 'aj-subscribe',
  templateUrl: 'subscribe.component.html',
  styleUrls: ['subscribe.component.css']
})
export class SubscribeComponent implements OnInit, AfterViewInit {
  @ViewChild('subscribeForm') form: NgForm;

  rules = RULES;
  email: string;
  errors: any;

  constructor(
    private validator: ValidatorService
  ) {}

  ngOnInit() {
    this.errors = {
      email: {}
    };
  }

  ngAfterViewInit() {
    this.validator.bindForm(this.form, this.errors);
  }

  onSubmit() {

  }
}
