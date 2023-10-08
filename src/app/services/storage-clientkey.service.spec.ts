import { TestBed } from '@angular/core/testing';

import { StorageClientKeyService } from './storage-clientkey.service';

describe('StorageClientKeyService', () => {
  let service: StorageClientKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageClientKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
