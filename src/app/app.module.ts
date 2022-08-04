import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { GuidesComponent } from './guides/guides.component';
import { names, price, titles } from './pipes/pipes';
import { TripsComponent } from './trips/trips.component';
import { PricesComponent } from './prices/prices.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    GuidesComponent,
    price,
    names,
    TripsComponent,
    PricesComponent,
    titles,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
