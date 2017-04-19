import { Injectable } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';

import { RULES } from 'assets/data/rules';

@Injectable()
export class ValidatorService {
  bindForm(form: NgForm, errors: any) {
    form.valueChanges
      .subscribe((data) => this.onValueChanged(data, form, errors));
  }

  private onValueChanged(data: any, form: NgForm, errors: any) {
    Object.keys(data).forEach((field) => {
      let control: AbstractControl = form.form.get(field);
      let error = errors[field];
      let rule = RULES[field];

      if (control && error && rule) {
        this.validate(control, error, rule);
      }
    });
  }

  private validate(control: AbstractControl, error: any, rule: any) {
    if (control.dirty && control.invalid) {
      const key = Object.keys(control.errors)[0];

      error.title = rule.validator[key];
      error.status = true;
    } else {
      error.status = false;
    }
  }
}
