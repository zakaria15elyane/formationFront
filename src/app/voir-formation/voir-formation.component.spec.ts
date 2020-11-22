import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirFormationComponent } from './voir-formation.component';

describe('VoirFormationComponent', () => {
  let component: VoirFormationComponent;
  let fixture: ComponentFixture<VoirFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
