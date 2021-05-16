import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Compnents */
import { DashboardComponent } from './dashboard/dashboard.component';

/** UI Components */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

/** 3rd Party Services */
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDE7pF90ID1NFxMz9brGkRHFRaIwiCBjj4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
