import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-btnsubmit',
  imports: [],
  templateUrl: './btnsubmit.component.html',
  styleUrl: './btnsubmit.component.scss'
})
export class BtnsubmitComponent {
  @Input() label = '';
  @Input() type =  'button';
  @Input() customClass = '';
  @Output() clicked = new EventEmitter<void>();

  onClick(){
    this.clicked.emit();
  }
}
