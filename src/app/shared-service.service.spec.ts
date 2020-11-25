import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SharedServiceService } from './shared-service.service';

describe('SharedServiceService', () => {
  let service: SharedServiceService;
  let http : HttpClient = new HttpClient(null)

  beforeEach(() => {
    service = new SharedServiceService(http)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
