import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordianControllerComponent } from './accordian-controller.component';

describe('AccordianControllerComponent: Strap', () => {
  let component: AccordianControllerComponent;
  let fixture: ComponentFixture<AccordianControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AccordianControllerComponent: Methods', () => {
    it('ngOnInit() - should initialise component input keys', () => {
      component.accordianGroup = {};
      component.ngOnInit();

      expect(component.accordianGroup.heading).toBeDefined();
      expect(component.accordianGroup.groups).toBeDefined();
    });
  });

});
