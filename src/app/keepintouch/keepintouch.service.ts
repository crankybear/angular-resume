import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Whoisit} from './whoisit';

@Injectable({
  providedIn: 'root'
})
export class KeepintouchService {

  constructor(private http: HttpClient) { }

  saveMessageInfo(user: Whoisit): Observable<any> {
    return this.http.put('../assets/spam.json', JSON.stringify(user));
  }
}
