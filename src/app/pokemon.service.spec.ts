import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Get Pokemon Details with data', () => {
    service.getPokemonDetails(1).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.name).toBe('Pokemon');
      expect(result.id).toBe(1);
    });

    let req = httpMock.expectOne(`${environment.pokedexBaseUrl}/pokemon/1`);
    expect(req.request.method).toBe('GET');

    let response = {
      name: 'Pokemon',
      id: 1,
    };

    req.flush(response);
  });

  it('should pokemon list with data', () => {
    service.getPokemonList().subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.count).toBe(2);
      expect(result.results.length).toBe(2);
    });

    let req = httpMock.expectOne(`${environment.pokedexBaseUrl}/pokemon`);
    expect(req.request.method).toBe('GET');
    let responseObj = {
      count: 2,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };
    req.flush(responseObj);
  });
});
