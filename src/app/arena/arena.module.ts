import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenaRoutingModule } from './arena-routing.module';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonUtilsModule } from '../pokemon-utils/pokemon-utils.module';
import { PokemonSelectionListComponent } from './components/create-arena/components/pokemon-selection-list/pokemon-selection-list.component';
import { PokemonSelectionListItemComponent } from './components/create-arena/components/pokemon-selection-list-item/pokemon-selection-list-item.component';
import { PokemonSelectedListComponent } from './components/create-arena/components/pokemon-selected-list/pokemon-selected-list.component';
import { ArenaDetailsComponent } from './components/arena-details/arena-details.component';
import { ArenaDetailBattleRecordsComponent } from './components/arena-details/components/arena-detail-battle-records/arena-detail-battle-records.component';
import { ArenaDetailBattleEncounterComponent } from './components/arena-details/components/arena-detail-battle-encounter/arena-detail-battle-encounter.component';
import { ArenaDetailBattleRecordItemComponent } from './components/arena-details/components/arena-detail-battle-record-item/arena-detail-battle-record-item.component';
import { ArenaListComponent } from './components/arena-list/arena-list.component';
import { ArenaListItemComponent } from './components/arena-list/components/arena-list-item/arena-list-item.component';

@NgModule({
  declarations: [
    CreateArenaComponent,
    PokemonSelectionListComponent,
    PokemonSelectionListItemComponent,
    PokemonSelectedListComponent,
    ArenaDetailsComponent,
    ArenaDetailBattleRecordsComponent,
    ArenaDetailBattleEncounterComponent,
    ArenaDetailBattleRecordItemComponent,
    ArenaListComponent,
    ArenaListItemComponent,
  ],
  imports: [CommonModule, PokemonUtilsModule, SharedModule, ArenaRoutingModule],
})
export class ArenaModule {}
