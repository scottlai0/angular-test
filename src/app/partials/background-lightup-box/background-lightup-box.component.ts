import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'background-lightup-box',
  templateUrl: './background-lightup-box.component.html',
  styleUrls: ['./background-lightup-box.component.scss']
})
export class BackgroundLightupBoxComponent implements OnInit {

  @ViewChild('bgAnimation') bgAnimation: any;
  numberOfColorBoxes = 625;

  ngOnInit(): void{
  }

  ngAfterViewInit(): void {
    this.generateBoxes();    
  }

  generateBoxes(): void{
    for (let i = 0; i < this.numberOfColorBoxes; i++){
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      this.bgAnimation.nativeElement.append(colorBox);
    }
  }
}
