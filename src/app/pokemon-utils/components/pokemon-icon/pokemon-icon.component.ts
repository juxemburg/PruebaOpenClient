/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
// import { PkSpr } from 'pokesprite';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const PkSpr: any;

@Component({
  selector: 'app-pokemon-icon',
  templateUrl: './pokemon-icon.component.html',
  styleUrls: ['./pokemon-icon.component.scss'],
})
export class PokemonIconComponent implements OnInit, AfterViewInit {
  @Input() set pokemonName(v: string) {
    this.className = `pkspr pkmn-${v}`;
  }

  public className: string;

  @ViewChild('pkmIcon', { static: false }) iconElem: ElementRef;

  ngOnInit(): void {
    // const icon = PkSpr.decorate({ slug: 'pokemonName' });
  }
  ngAfterViewInit(): void {
    PkSpr.decorate(this.iconElem.nativeElement);
  }
}
