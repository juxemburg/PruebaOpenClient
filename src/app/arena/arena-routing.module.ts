import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreateArenaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArenaRoutingModule {}
