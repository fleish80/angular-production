import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from '@angular-production/material';
import {CoreStateModule} from '@angular-production/core-state';
import {CoreDataModule} from '@angular-production/core-data';
import {AppRoutingModule} from './app-routing.module';
import {SongsComponent} from './songs/songs.component';
import {HomeComponent} from './home/home.component';
import {SongsListComponent} from './songs/songs-list/songs-list.component';
import {SongsDetailsComponent} from './songs/songs-details/songs-details.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UiToolbarModule} from '@angular-production/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    HomeComponent,
    SongsListComponent,
    SongsDetailsComponent],
  imports: [BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    CoreStateModule,
    CoreDataModule,
    AppRoutingModule, FormsModule, RouterModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
