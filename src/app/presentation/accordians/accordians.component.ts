import { Component, Input } from '@angular/core';
import { AccordianGroup } from  '../types/accordian.types'; 
@Component({
  selector: 'app-accordians',
  templateUrl: './accordians.component.html',
  styleUrls: ['./accordians.component.scss']
})
export class AccordiansComponent {
  @Input() accordianGroup: AccordianGroup = {};
}
