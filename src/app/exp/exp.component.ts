import { Component, OnInit } from '@angular/core';
import {ExpService} from './exp.service';
import {tap} from 'rxjs/operators';
import {Exp} from './exp';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  exp: Exp[] = [];
  constructor(private expService: ExpService) { }

  ngOnInit(): void {
    this.expService.findAll().pipe(tap(exp => this.exp = exp)).subscribe();
  }

}
