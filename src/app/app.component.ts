import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup | undefined;
  title = 'observables';
  constructor(private fb: FormBuilder) {}


  ngOnInit() {
    this.form = this.fb.group({
      date: ''
    });
  }
}
