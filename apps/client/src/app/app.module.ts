import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreDataModule} from '@angular-production/core-data';
import {UiToolbarModule} from '@angular-production/ui-toolbar';
import {MaterialModule} from '@angular-production/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    CoreDataModule,
    UiToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
