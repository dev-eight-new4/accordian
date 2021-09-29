/* 
  Controller: 
  - Sanitize and Simply Data For Presentation Components

  Data : Typically come from data service - hardcoded here currently
  Mutable Data:  Provides default state only on initial load
*/
import { Component, OnInit } from '@angular/core';
import { AccordianGroup } from  '../../presentation/types/accordian.types';
import { accordianMockDataGroup1, accordianMockDataGroup2 } from './accordian-controller.mock.data';

@Component({
  selector: 'app-accordian-controller',
  templateUrl: './accordian-controller.component.html'
})
export class AccordianControllerComponent implements OnInit {
  accordianGroup: AccordianGroup = {};
  ready = false;

  constructor() {}
  
  ngOnInit() {
    /* Data/UI Ready Actions */
    this.accordianGroup = {
      heading: 'Accordians', /* temp heading */
      groups: [accordianMockDataGroup1, accordianMockDataGroup2]
    };
    this.ready = true;
  }
}
