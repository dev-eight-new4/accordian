import { ElementRef } from '@angular/core';

export const stickyHeader = {
    on : (element: ElementRef, header: HTMLElement, component: any ): void => {
        const height: string = header.offsetHeight + 'px';
        const width: string = header.getBoundingClientRect().width + 'px';
        const fullHeight: string = component.accordiansElement?.nativeElement.offsetHeight + 'px';
  
        // Computed Space left where the header was ( header not cloned )
        header.style.setProperty('width', width);
        header.style.setProperty('top', component.top + 'px');
        element.nativeElement.style.setProperty('padding-top', height);
        component.accordiansElement?.nativeElement.style.setProperty('height', fullHeight);
    },
    off: (element: ElementRef, header: HTMLElement): void => {
        element.nativeElement.style.removeProperty('padding-top');
        header.style.removeProperty('top')
        header.style.removeProperty('width');
    },
    set: (element: ElementRef, reference: string, component: any): void => {
        const header: HTMLElement = stickyHeader.getHeader(element);
        const top = element.nativeElement.getBoundingClientRect().top;
        const position = element.nativeElement.clientHeight + top;
    
        const isStuck = component.references[reference].sticky;
        const couldStick: boolean = top <= component.top;
        const shouldUnStick: boolean = ( position - 70 ) <= component.top || !couldStick;
        const shouldStick = couldStick && !shouldUnStick && !isStuck;
    
        if ( shouldUnStick ) {
          stickyHeader.off(element, header);
          component.references[reference].sticky = false;
        }
    
        if ( shouldStick ) {
          stickyHeader.on(element, header, component);
          component.references[reference].sticky = true;
        }
    },
    remove: (element: ElementRef, reference: string, component: any): void => {
        const header = stickyHeader.getHeader(element);
        stickyHeader.off(element, header);
        component.references[reference].sticky = false;
    },
    getHeader: (element: ElementRef): HTMLElement => {
        return element.nativeElement.querySelector('.accordian__heading');
    }
}