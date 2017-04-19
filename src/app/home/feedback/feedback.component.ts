import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Feedback } from './feedback';
import { ValidatorService } from 'core/services';
import { RULES } from 'assets/data/rules';

@Component({
  selector: 'aj-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent implements OnInit, AfterViewInit {
  @ViewChild('feedbackForm') form: NgForm;

  rules = RULES;
  feedback: Feedback;
  errors: any;

  constructor(
    private validator: ValidatorService
  ) {}

  ngOnInit() {
    this.feedback = new Feedback('', '');
    this.errors = {
      username: {},
      email: {}
    };
  }

  ngAfterViewInit() {
    this.validator.bindForm(this.form, this.errors);
  }

  onSubmit() {

  }
}
