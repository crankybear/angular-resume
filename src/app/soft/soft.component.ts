import { Component, OnInit } from '@angular/core';
import {Soft} from './soft';
import {SoftService} from './soft.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements OnInit {

  soft: Soft[];

  constructor(private softService: SoftService) { }

  ngOnInit(): void {
    this.softService.findAll().pipe(tap(softskills => this.soft = softskills)).subscribe();
  }

}
