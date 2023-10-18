import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuotesComponent } from './generate-quotes.component';

describe('GenerateQuotesComponent', () => {
  let component: GenerateQuotesComponent;
  let fixture: ComponentFixture<GenerateQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateQuotesComponent]
    });
    fixture = TestBed.createComponent(GenerateQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
