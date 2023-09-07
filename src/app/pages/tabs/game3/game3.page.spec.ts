import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game3Page } from './game3.page';

describe('Game3Page', () => {
  let component: Game3Page;
  let fixture: ComponentFixture<Game3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Game3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
