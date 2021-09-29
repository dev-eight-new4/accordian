import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { SanitizeHtml } from '../../pipe/dom-santizer';

describe('ArticleComponent: Strap', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent, SanitizeHtml ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ArticleComponent: Input Decorator', () => {
    it('Should have an Article Input defined', () => {
      expect(component.article).toBeDefined();
    });
  });
});
