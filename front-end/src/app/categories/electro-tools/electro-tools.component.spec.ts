import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroToolsComponent } from './electro-tools.component';

describe('ElectroToolsComponent', () => {
  let component: ElectroToolsComponent;
  let fixture: ComponentFixture<ElectroToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectroToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
