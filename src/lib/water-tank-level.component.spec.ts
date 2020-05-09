import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTankLevelComponent } from './water-tank-level.component';

describe('WaterTankLevelComponent', () => {
  let component: WaterTankLevelComponent;
  let fixture: ComponentFixture<WaterTankLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterTankLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTankLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
