import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPokemonsFoundComponent } from './no-pokemons-found.component';

describe('NoPokemonsFoundComponent', () => {
  let component: NoPokemonsFoundComponent;
  let fixture: ComponentFixture<NoPokemonsFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPokemonsFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPokemonsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
