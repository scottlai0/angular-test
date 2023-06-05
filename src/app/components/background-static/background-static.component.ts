import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'background-static',
  templateUrl: './background-static.component.html',
  styleUrls: ['./background-static.component.scss']
})
export class BackgroundStaticComponent implements OnInit {
  @Input() id?: String;
  @Input() backgroundUrl?: String;
  @Input() padding?: String;
  @ViewChild('content') content: any;

  ngOnInit(){}

  ngAfterViewInit(){
    if (!this.id) this.id = uuid();

    let styles: String = '';
    styles = this.backgroundUrl ? styles += `background: url(${this.backgroundUrl}) no-repeat center center fixed; background-size: cover;` : '';
    styles = this.padding ? styles += `padding: ${this.padding};` : styles += `padding: 3rem;`;

    this.content.nativeElement.setAttribute('style', styles);
    //console.log(this.content.nativeElement);
  }
  
}


