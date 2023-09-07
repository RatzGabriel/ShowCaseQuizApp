import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game2Page } from './game2.page';

describe('Game2Page', () => {
  let component: Game2Page;
  let fixture: ComponentFixture<Game2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Game2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
