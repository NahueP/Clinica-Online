import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEspecialistasComponent } from './admin-especialistas.component';

describe('AdminEspecialistasComponent', () => {
  let component: AdminEspecialistasComponent;
  let fixture: ComponentFixture<AdminEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEspecialistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
