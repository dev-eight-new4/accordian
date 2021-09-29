import { ElementRef } from '@angular/core';

export interface AccordianGroup {
    heading?: string;
    groups?: Accordian[][];
}
export interface Accordian {
    open: boolean;
    heading: string;
    content: string;
    nativeElement?: ElementRef;
    reference?: string;
    sticky?: boolean;
}
