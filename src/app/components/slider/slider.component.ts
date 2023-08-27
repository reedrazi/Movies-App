import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movies';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {IMAGES_SIZES} from '../../constants/image-sizes'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('fade',[
      state('void', style({opacity:0})),
      transition('void=>*',[animate('1s')]),
      transition('*=>void',[animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit{
  @Input() items:Movie[] =[];
  readonly imagesSizes =IMAGES_SIZES;

  currentSlideIndex:number=0;


  ngOnInit(): void {
      setInterval(()=>{
        this.currentSlideIndex=++this.currentSlideIndex % this.items.length;
      },5000)
  }
}
