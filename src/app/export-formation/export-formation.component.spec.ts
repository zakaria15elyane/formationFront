import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportFormationComponent } from './export-formation.component';

describe('ExportFormationComponent', () => {
  let component: ExportFormationComponent;
  let fixture: ComponentFixture<ExportFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
