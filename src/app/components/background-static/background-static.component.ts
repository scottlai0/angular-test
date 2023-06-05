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
  @Input() backgroundBlur?: String;

  @ViewChild('background') background: any;
  @ViewChild('content') content: any;

  ngOnInit(){}

  ngAfterViewInit(){
    if (!this.id) this.id = uuid();
    
    let background_style = ''
    background_style += this.backgroundUrl ? background_style += `background:url(${this.backgroundUrl}) no-repeat center center fixed; background-size:cover;` : '';
    this.background.nativeElement.setAttribute('style', background_style);

    let content_styles: String = '';
    content_styles = this.padding ? content_styles += `padding:${this.padding};` : content_styles += `padding:3rem;`;
    content_styles = this.backgroundBlur ? content_styles += `backdrop-filter: blur(${this.backgroundBlur});`: '';
    this.content.nativeElement.setAttribute('style', content_styles);
    //console.log(this.content.nativeElement);
  }
  
}


