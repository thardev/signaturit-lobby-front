import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
  	PartyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
