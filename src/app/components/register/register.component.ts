import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnsubmitComponent } from '../buttons/btnsubmit.component';
import { GenericInputComponent } from "../inputs/generic-input/generic-input.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [BtnsubmitComponent, GenericInputComponent, ReactiveFormsModule, GenericInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private router: Router){}

  singInClick(){
    this.router.navigate(['/']);  
  }

  singUpClick() {
    console.log('submit');
  }

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
}
