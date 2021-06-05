import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from './contact';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Contact[]> {
    return this.http.get('../assets/contact.json')
      .pipe(
        map((all: {infos: Contact[]}) => all.infos)
      ) as Observable<Contact[]>;
  }
}
