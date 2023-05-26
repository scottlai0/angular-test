import { Component, Input, ViewChildren } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'sliding-radio-checkbox',
  templateUrl: './sliding-radio-checkbox.component.html',
  styleUrls: ['./sliding-radio-checkbox.component.scss']
})
export class SlidingRadioCheckboxComponent {
  @Input() id?: String;
  @ViewChildren('radioDiv') radioDiv: any;

  input_id: String = '';
  label_id: String = '';

  ngOnInit(){
    if (!this.id) this.id = uuid();
    this.input_id = 'input-' + this.id;    
    this.label_id = 'label-' + this.id;
  }

  ngAfterViewInit(){
    if (!this.id) this.id = uuid();
  }

  toggleRadioCheckbox(){
    this.radioDiv.forEach((e: any) => {
      if (e.nativeElement.id.includes('input')){
        e.nativeElement.checked = !e.nativeElement.checked;
      }
    })
    
  }
}
