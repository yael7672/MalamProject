import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeesComponent } from './my-employees.component';

describe('MyEmployeesComponent', () => {
  let component: MyEmployeesComponent;
  let fixture: ComponentFixture<MyEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
