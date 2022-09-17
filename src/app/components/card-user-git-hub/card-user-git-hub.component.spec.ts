import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserGitHubComponent } from './card-user-git-hub.component';

describe('CardUserGitHubComponent', () => {
  let component: CardUserGitHubComponent;
  let fixture: ComponentFixture<CardUserGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserGitHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
