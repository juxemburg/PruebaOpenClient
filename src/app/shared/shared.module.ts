import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LoadingBarsComponent } from './components/loading-bars/loading-bars.component';
import { LoadingSpinComponent } from './components/loading-spin/loading-spin.component';

@NgModule({
  declarations: [LoadingBarsComponent, LoadingSpinComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule, LoadingBarsComponent, LoadingSpinComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
