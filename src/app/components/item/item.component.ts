import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movies';
import {IMAGES_SIZES} from '../../constants/image-sizes'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  imagesSizes=IMAGES_SIZES;

  @Input() itemData:Movie |null=null;

}
