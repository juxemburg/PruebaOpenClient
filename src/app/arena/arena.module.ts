import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenaRoutingModule } from './arena-routing.module';
import { CreateArenaComponent } from './components/create-arena/create-arena.component';


@NgModule({
  declarations: [CreateArenaComponent],
  imports: [
    CommonModule,
    ArenaRoutingModule
  ]
})
export class ArenaModule { }
