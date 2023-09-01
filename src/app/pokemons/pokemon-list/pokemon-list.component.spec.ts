import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from 'src/app/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';

let pokemonResults = {
  results: [
    {
      name: 'Bulbasor',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
};

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let mockPokemonService;

  beforeEach(async () => {
    mockPokemonService = jasmine.createSpyObj<PokemonService>([
      'getPokemonList',
    ]);
    mockPokemonService.getPokemonList.and.callFake(() => {
      console.log('******Moocked called');
      return of(pokemonResults);
    });

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [
        HttpClientTestingModule,
        MatGridListModule,
        RouterTestingModule,
      ],
      providers: [{ provider: PokemonService, useValue: mockPokemonService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    let testServiceSpy = TestBed.inject(PokemonService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemon with data', fakeAsync(() => {
    component.getPokemonList();
    tick();
    fixture.detectChanges();

    console.log(fixture.debugElement);

    console.log(component.pokemonIds);
    //expect(component.pokemonIds).toBeTruthy();
    //expect(component.pokemonIds.length).toBe(1);
  }));
});
