import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboEditorComponent } from './turbo-editor.component';

describe('TurboEditorComponent', () => {
  let component: TurboEditorComponent;
  let fixture: ComponentFixture<TurboEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurboEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurboEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
