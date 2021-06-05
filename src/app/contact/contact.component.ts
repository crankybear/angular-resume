import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  infos: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.findAll().pipe(tap(infos => this.infos = infos)).subscribe();
  }

}
