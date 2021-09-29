import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordiansComponent } from './accordians/accordians.component';
import { ArticleComponent } from './article/article.component';
import { SanitizeHtml } from '../pipe/dom-santizer';
@NgModule({
  declarations: [
    AccordianComponent,
    AccordiansComponent,
    ArticleComponent,
    SanitizeHtml
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AccordianComponent,
    AccordiansComponent,
    ArticleComponent,
    SanitizeHtml
  ]
})
export class PresentationModule { }
