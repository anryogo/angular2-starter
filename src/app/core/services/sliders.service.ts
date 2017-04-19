import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Book } from 'shared/models/book';

@Injectable()
export class SlidersService {
  constructor(private http: Http) {}

  getContent(): Observable<Book[]> {
    return this.http.get('assets/data/mocks/books.json')
      .map((res) => res.json());
  }
}
