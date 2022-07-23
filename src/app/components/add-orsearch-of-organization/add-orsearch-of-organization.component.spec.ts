import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrsearchOfOrganizationComponent } from './add-orsearch-of-organization.component';

describe('AddOrsearchOfOrganizationComponent', () => {
  let component: AddOrsearchOfOrganizationComponent;
  let fixture: ComponentFixture<AddOrsearchOfOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrsearchOfOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrsearchOfOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
