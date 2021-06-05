import { Component, OnInit } from '@angular/core';
import {Formation} from './formation';
import {FormationService} from './formation.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations: Formation[] = [];
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.findAll().pipe(tap(formations => this.formations = formations)).subscribe();
  }

}
