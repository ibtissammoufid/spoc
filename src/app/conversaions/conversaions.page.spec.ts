import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversaionsPage } from './conversaions.page';

describe('ConversaionsPage', () => {
  let component: ConversaionsPage;
  let fixture: ComponentFixture<ConversaionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversaionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversaionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
