import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PresentationModule } from '../presentation/presentation.module';
import { AccordianControllerComponent } from './accordian-controller/accordian-controller.component';

@NgModule({
  declarations: [
    AccordianControllerComponent
  ],
  imports: [
    BrowserModule,
    PresentationModule
  ],
  exports: [
    AccordianControllerComponent
  ]
})
export class ControllerModule { }