import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  declarations: [
    ToolbarComponent
  ],
  exports: [ToolbarComponent]
})
export class UiToolbarModule {
}
