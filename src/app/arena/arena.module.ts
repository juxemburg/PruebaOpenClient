import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenaRoutingModule } from './arena-routing.module';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonUtilsModule } from '../pokemon-utils/pokemon-utils.module';
import { PokemonSelectionListComponent } from './components/create-arena/components/pokemon-selection-list/pokemon-selection-list.component';

@NgModule({
  declarations: [CreateArenaComponent, PokemonSelectionListComponent],
  imports: [CommonModule, PokemonUtilsModule, SharedModule, ArenaRoutingModule],
})
export class ArenaModule {}
