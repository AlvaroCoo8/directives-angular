import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveElseComponent } from './directive-else.component';

describe('DirectiveElseComponent', () => {
  let component: DirectiveElseComponent;
  let fixture: ComponentFixture<DirectiveElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveElseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
