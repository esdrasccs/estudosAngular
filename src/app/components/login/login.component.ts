import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { GenericInputComponent } from '../inputs/generic-input/generic-input.component';
import { BtnsubmitComponent } from '../buttons/btnsubmit.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, GenericInputComponent,BtnsubmitComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}

  singInClick(){
    console.log('Logou');
  }

  singUpClick() {
    this.router.navigate(['/register']);
  }

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
}
