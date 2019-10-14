import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-icon',
  templateUrl: './pokemon-type-icon.component.html',
  styleUrls: ['./pokemon-type-icon.component.scss'],
})
export class PokemonTypeIconComponent implements OnInit {
  @Input() set type(v: string) {
    this.className = `type-${v}`;
    this.typename = v;
  }

  public className: string;
  public typename: string;

  ngOnInit(): void {
    // const icon = PkSpr.decorate({ slug: 'pokemonName' });
  }
}
