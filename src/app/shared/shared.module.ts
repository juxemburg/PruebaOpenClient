import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LoadingBarsComponent } from './components/loading-bars/loading-bars.component';
import { LoadingSpinComponent } from './components/loading-spin/loading-spin.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [LoadingBarsComponent, LoadingSpinComponent],
  imports: [CommonModule, FontAwesomeModule, ScrollingModule],
  exports: [
    FontAwesomeModule,
    LoadingBarsComponent,
    LoadingSpinComponent,
    ScrollingModule,
    DragDropModule,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
