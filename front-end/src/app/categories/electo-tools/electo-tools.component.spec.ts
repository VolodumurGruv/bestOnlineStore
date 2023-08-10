import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoToolsComponent } from './electo-tools.component';

describe('ElectoToolsComponent', () => {
  let component: ElectoToolsComponent;
  let fixture: ComponentFixture<ElectoToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectoToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
