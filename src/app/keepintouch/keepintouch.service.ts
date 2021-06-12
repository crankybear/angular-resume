import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class KeepintouchService {

  constructor(private http: HttpClient) { }
/*
  saveMessageInfo(): Observable<any> {
    return //this.http.put('', );
  }
 */
}
