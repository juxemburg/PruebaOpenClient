import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';
import { ArenaDetailsComponent } from './components/arena-details/arena-details.component';
import { ArenaDetailBattleEncounterComponent } from './components/arena-details/components/arena-detail-battle-encounter/arena-detail-battle-encounter.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreateArenaComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArenaRoutingModule {}
