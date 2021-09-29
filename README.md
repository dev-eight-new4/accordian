# Accordions ( *Accordian* )

## Demo

[https://dev-eight-new4.github.io/accordian/](https://dev-eight-new4.github.io/accordian/)

## Develop


[Angular CLI](https://github.com/angular/angular-cli) version 12.2.7

## Setup

Data > Service > Controller > Presentation 

[Data (example)](https://github.com/dev-eight-new4/accordian/blob/main/src/app/controller/accordian-controller/accordian-controller.mock.data.ts) > [Controller (example)](https://github.com/dev-eight-new4/accordian/blob/main/src/app/controller/accordian-controller/accordian-controller.component.ts) > [Presentation (example)](https://github.com/dev-eight-new4/accordian/blob/main/src/app/presentation/accordian/accordian.component.ts) 

*No Service was employed in this demo - controller imports directly*

### Accordian Data

```
[ 
 {
  open: boolean, // is the accordian content open initially
  heading: string,
  content: string // HTML string
 },
 ...
]
```

## Unit Test

[Example of some methods](https://github.com/dev-eight-new4/accordian/blob/main/src/app/presentation/accordian/accordian.component.spec.ts) in Unit Test 

## After Thoughts/Ums and Ers

- Using Window as the Scroll Viewport
- Not Using IntersectionObserver

## Notes

- Needed to employ some *Magic Numbers* in the methods for positioning - These can be removed with better javascript calls to HTMLNative elements sizes
- Using the window as the viewport/Scroll will effect the position of other Accordion Groups position - `IntersectionObservable` or `@Host()` Scroll listeners to `@ViewChildren()` instead
- Run out of time to demo an E2E test
- (Refactor for reuse and upgrage to IntersectionObserver use) Scroll Behaviour is candidate for a Directive - made a start here separating 'sticky' behaviour out of the component [sticky...ts](https://github.com/dev-eight-new4/accordian/blob/main/src/app/presentation/accordian/accordian.component.sticky.ts)
- (bug) Content cut off : Animations set via an arbitrary 'max-height' - not good if content is larger. Should determine and set this programatically 

## Thanks

Thanks for the tech test, was fun, especially around the handling of;

````
if (scroll beyond accordion content) { 
   make header unsticky; 
}
