import { TestBed } from '@angular/core/testing';

import { TurboEditorService } from './turbo-editor.service';

describe('TurboEditorService', () => {
  let service: TurboEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurboEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
