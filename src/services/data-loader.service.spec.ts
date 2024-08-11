import { TestBed } from '@angular/core/testing';

import { DataLoaderService } from './data-loader.service';

describe('DataLoaderService', () => {
  let service: DataLoaderService;

  beforeAll(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have armor', () => {
    expect(service.armors).toBeTruthy();
    expect(service.armors.length).toBeGreaterThan(0);
  });

  it('should have weapons', () => {
    expect(service.weapons).toBeTruthy();
    expect(service.weapons.length).toBeGreaterThan(0);
  });

  it('should have enemies', () => {
    expect(service.enemies).toBeTruthy();
    expect(service.enemies.length).toBeGreaterThan(0);
  });

});
