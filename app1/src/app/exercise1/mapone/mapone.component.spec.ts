import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaponeComponent } from './mapone.component';

describe('MaponeComponent', () => {
  let component: MaponeComponent;
  let fixture: ComponentFixture<MaponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaponeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
