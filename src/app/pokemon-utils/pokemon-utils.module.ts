import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonResourceService } from './services/pokemon-resource.service';
import { PokemonIconComponent } from './components/pokemon-icon/pokemon-icon.component';

@NgModule({
  declarations: [PokemonIconComponent],
  imports: [CommonModule],
  exports: [PokemonIconComponent],
  providers: [PokemonResourceService],
})
export class PokemonUtilsModule {}
