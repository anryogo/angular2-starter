import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contacts } from './contacts';
import { ValidatorService } from 'core/services';

import { RULES } from 'assets/data/rules';
import { categories } from 'assets/data/categories';
import { socialLinks } from 'assets/data/links';

@Component({
  selector: 'aj-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit, AfterViewInit {
  @ViewChild('contactsForm') form: NgForm;

  rules = RULES;
  categories = categories;
  socialLinks = socialLinks;

  contacts: Contacts;
  errors: any;

  constructor(
    private validator: ValidatorService
  ) {}

  ngOnInit() {
    this.contacts = new Contacts('', '', '', '');
    this.errors = {
      email: {},
      username: {},
      phone: {},
      message: {}
    };
  }

  ngAfterViewInit() {
    this.validator.bindForm(this.form, this.errors);
  }

  onSubmit() {

  }

  selectCategory(e, category) {
    e.preventDefault();
    this.contacts.category = category.title;
  }
}
