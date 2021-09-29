import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { HostListener } from '@angular/core';
import { Accordian } from  '../types/accordian.types';
import { stickyHeader } from './accordian.component.sticky';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit, AfterViewInit {
  @Input() accordians: Accordian[] = [];
  @ViewChildren('accordianElement') accordianElements?: QueryList<ElementRef>;
  @ViewChild('accordiansElement') accordiansElement?: ElementRef;

  stickyHeader = stickyHeader;
  window = window;
  scrollDebounce: any;
  references: { [key: string]: Accordian; } = {};
  top: number = 0;
  ready = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    if ( this.ready ) {
      this.window.clearTimeout(this.scrollDebounce);
      this.scrollDebounce = this.window.setTimeout( this.scrollHandler.bind(this), 10);
    }
  }

  ngOnInit(): void {
    this.setElementReferences();
  }

  ngAfterViewInit() {
    this.window.setTimeout( this.setTop.bind(this), 100);
  }

  setElementReferences(): void {
    this.accordians.forEach((accordian: Accordian, index: number)=> {
      accordian.reference = 'accordian_' + index;
      this.references[accordian.reference] = accordian;
    });
  }

  toggle(accordian: Accordian, accordianElement: HTMLElement ): void {
    const wasSticky = accordian.sticky;

    accordian.sticky = false;
    accordian.open = !accordian.open;

    if (wasSticky) {
      this.keepPosition(accordianElement);
    }
  }

  keepPosition(accordianElement: HTMLElement): void {
    const elementTopPosition = accordianElement.getBoundingClientRect().top;
    this.window.scrollTo({top: this.window.scrollY - (-elementTopPosition) - 79});
  }

  isElementSticky(element: ElementRef): void {
    let reference: string | undefined = element.nativeElement.dataset.reference;
    reference = reference ? reference : '';

    if (this.references[reference].open) {
      this.stickyHeader.set(element, reference, this);
     } else {
      this.stickyHeader.remove(element, reference, this);
     } 
  };

  setTop(): void {
    this.window.scrollTo(0,0);
    this.top = this.accordiansElement?.nativeElement.getBoundingClientRect().top - 33;
    this.ready = true;
  }
  
  scrollHandler(): void {
    this.accordianElements?.forEach(this.isElementSticky.bind(this));
  }
}

/* TODO: Replace Magic Numbers that have been added to keep positions based on changes to style */