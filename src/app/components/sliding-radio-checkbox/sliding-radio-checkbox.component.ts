import { Component, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'sliding-radio-checkbox',
  templateUrl: './sliding-radio-checkbox.component.html',
  styleUrls: ['./sliding-radio-checkbox.component.scss']
})
export class SlidingRadioCheckboxComponent {
  @Input() id?: String;

  label_id: String = '';

  ngOnInit(){
    if (!this.id) this.id = uuid();
    this.label_id = this.id + '-label'
  }
}
