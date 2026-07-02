import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinvitesComponent } from './allinvites.component';

describe('AllinvitesComponent', () => {
  let component: AllinvitesComponent;
  let fixture: ComponentFixture<AllinvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllinvitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllinvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
