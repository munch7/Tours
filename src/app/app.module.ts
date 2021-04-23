import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingsComponent } from './bookings/bookings.component';
import { StaysComponent } from './stays/stays.component';
import { FlightsComponent } from './flights/flights.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NairobiComponent } from './home/nairobi/nairobi.component';
import { MombasaComponent } from './home/mombasa/mombasa.component';
import { MaraComponent } from './home/mara/mara.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BookingsComponent,
    StaysComponent,
    FlightsComponent,
    ContactsComponent,
    NairobiComponent,
    MaraComponent,
    MombasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
