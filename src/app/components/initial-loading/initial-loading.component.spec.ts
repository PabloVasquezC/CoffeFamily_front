import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLoadingComponent } from './initial-loading.component';

describe('InitialLoadingComponent', () => {
  let component: InitialLoadingComponent;
  let fixture: ComponentFixture<InitialLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
