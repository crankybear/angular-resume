import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exp} from './exp';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Exp[]> {
    return this.http.get('../assets/xp.json')
      .pipe(
        map((all: {exp: Exp[]}) => all.exp)
      ) as Observable<Exp[]>;
  }
}
