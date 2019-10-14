import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';
import { ArenaDetailsComponent } from './components/arena-details/arena-details.component';
import { ArenaDetailBattleEncounterComponent } from './components/arena-details/components/arena-detail-battle-encounter/arena-detail-battle-encounter.component';
import { ArenaListComponent } from './components/arena-list/arena-list.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokedexListEntryComponent } from './components/pokedex-list/components/pokedex-list-entry/pokedex-list-entry.component';
import { PokedexListEntryEmptyComponent } from './components/pokedex-list/components/pokedex-list-entry-empty/pokedex-list-entry-empty.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreateArenaComponent,
  },
  {
    path: 'list',
    component: ArenaListComponent,
  },
  {
    path: 'pokedex-list',
    component: PokedexListComponent,
    children: [
      {
        path: 'empty',
        component: PokedexListEntryEmptyComponent,
      },
      {
        path: ':id',
        component: PokedexListEntryComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'empty',
      },
    ],
  },
  {
    path: ':arenaId',
    component: ArenaDetailsComponent,
    children: [
      {
        path: 'encounter/:position',
        component: ArenaDetailBattleEncounterComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'encounter/0',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArenaRoutingModule {}
