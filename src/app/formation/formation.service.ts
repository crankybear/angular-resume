import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from './formation';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Formation[]> {
    return this.http.get('../assets/formation.json')
      .pipe(
        map((all: {formations: Formation[]}) => all.formations)
      ) as Observable<Formation[]>;
  }
}
