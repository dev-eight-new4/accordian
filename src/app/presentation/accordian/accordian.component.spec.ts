import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordianComponent } from './accordian.component';

describe('AccordianComponent: Strap', () => {
  let component: AccordianComponent;
  let fixture: ComponentFixture<AccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AccordianComponent: Input Decorator', () => {
    it('Should have an accordians Input defined', () => {
      expect(component.accordians).toBeDefined();
    });
  });

  describe('AccordianComponent: Method', () => {
    it('ngOnInit - should set References', () => {
      spyOn(component, 'setElementReferences').and.callFake;
      component.ngOnInit();

      expect(component.setElementReferences).toHaveBeenCalled();
    });

    it('setElementReferences - should set Accordian Refrences for faster lookup', () => {
      let mockAccoridans = [
        {
          open: false,
          heading: 'one',
          content: 'content 1'
        },
        {
          open: false,
          heading: 'two',
          content: 'content 2'
        }
      ];
      component.accordians = mockAccoridans;
      component.setElementReferences();
  
      expect(component.accordians[0].reference).toEqual('accordian_0');
      expect(component.accordians[1].reference).toEqual('accordian_1');

      expect(component.references['accordian_0']).toEqual(component.accordians[0]);
      expect(component.references['accordian_1']).toEqual(component.accordians[1]);
    });
  });
});
