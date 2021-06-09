import {Component} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenav: MatSidenav;
  faBars = faBars;
  faTimes = faTimes;
}
