import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { KisumuComponent } from './home/kisumu/kisumu.component';
import { MombasaComponent } from './home/mombasa/mombasa.component';
import { NairobiComponent } from './home/nairobi/nairobi.component';
import { StaysComponent } from './stays/stays.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:[
    { path: 'nai', component: NairobiComponent },
    { path:'momba', component: MombasaComponent },
    { path:'kis', component: KisumuComponent }
  ] },
  { path: 'us', component: AboutUsComponent },
  { path: 'booking', component: BookingsComponent },
  { path: 'stay', component: StaysComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
