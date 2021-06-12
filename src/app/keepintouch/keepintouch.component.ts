import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {KeepintouchService} from './keepintouch.service';


@Component({
  selector: 'app-keepintouch',
  templateUrl: './keepintouch.component.html',
  styleUrls: ['./keepintouch.component.scss']
})
export class KeepintouchComponent implements OnInit {
  isSubmitted: boolean = false;
  contactForm: FormGroup;
  firstname: string;
  lastname: string;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.onFormInit();
  }

  onFormSubmit() {
    this.isSubmitted = true;
    if(this.contactForm.invalid) {
      return;
    } else {
      const formValue = this.contactForm.value;

    }
  }

  onFormInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  public get f() {
    return this.contactForm.controls;
  }
}
