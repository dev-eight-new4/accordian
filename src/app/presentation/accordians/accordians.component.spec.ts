import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordiansComponent } from './accordians.component';

describe('AccordiansComponent: Strap', () => {
  let component: AccordiansComponent;
  let fixture: ComponentFixture<AccordiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordiansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AccordiansComponent: Input Decorator', () => {
    it('Should have an accordianGroup Input defined', () => {
      expect(component.accordianGroup).toBeDefined();
    });
  });
});
