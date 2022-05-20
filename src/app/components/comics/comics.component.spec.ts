import { ComponentFixture, TestBed } from '@angular/core/testing';

import { comicComponent } from './comic.component';

describe('comicComponent', () => {
  let component: comicComponent;
  let fixture: ComponentFixture<comicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [comicComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(comicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
