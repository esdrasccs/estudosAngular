import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-generic-input',
  imports: [],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss'
})
export class GenericInputComponent {

  @Input() generic_input_name = new FormControl('');
  @Input() generic_input_id = '';
  @Input() generic_input_type = '';  
  @Input() generic_input_placeHolder = '';


}
