/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertCardService } from './ConvertCard.service';

describe('Service: ConvertCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertCardService]
    });
  });

  it('should ...', inject([ConvertCardService], (service: ConvertCardService) => {
    expect(service).toBeTruthy();
  }));
});
