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
import { SumbitButtonComponent } from './components/sumbit-button/sumbit-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingBarsComponent,
    LoadingSpinComponent,
    SumbitButtonComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, ScrollingModule],
  exports: [
    FontAwesomeModule,
    LoadingBarsComponent,
    LoadingSpinComponent,
    ScrollingModule,
    DragDropModule,
    SumbitButtonComponent,
    FormsModule,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
