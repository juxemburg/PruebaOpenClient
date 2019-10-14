import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonResourceService } from './services/pokemon-resource.service';
import { PokemonIconComponent } from './components/pokemon-icon/pokemon-icon.component';
import { PokemonInfoCardComponent } from './components/pokemon-info-card/pokemon-info-card.component';

@NgModule({
  declarations: [PokemonIconComponent, PokemonInfoCardComponent],
  imports: [CommonModule],
  exports: [PokemonIconComponent, PokemonInfoCardComponent],
  providers: [PokemonResourceService],
})
export class PokemonUtilsModule {}
