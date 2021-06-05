import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Soft} from './soft';
import {Contact} from '../contact/contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Soft[]> {
    return this.http.get('../assets/softskills.json')
      .pipe(
        map((all: { soft: Contact[]; }) => all.soft)
      ) as unknown as Observable<Soft[]>;
  }
}
