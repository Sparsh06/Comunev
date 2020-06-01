import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {EventsComponent} from './events/events.component';
import {PastEventsComponent} from './past-events/past-events.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';
import { InterestsComponent} from './interests/interests.component';
import {EventDisplayComponent} from './event-display/event-display.component';
import {AboutPageComponent} from './about-page/about-page.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {BecomeASpeakerComponent} from './become-a-speaker/become-a-speaker.component';
import {VenuePartnerComponent} from './venue-partner/venue-partner.component';
import {SponsorComponent} from './sponsor/sponsor.component';
import {PartnerComponent} from './partner/partner.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {CommunitiesComponent} from './communities/communities.component';
import {ComunevPageComponent} from './comunev-page/comunev-page.component';





const routes: Routes = [
  {path: '', redirectTo: '/about-page', pathMatch: 'full'},
  {path: 'signup' , component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-page' , component: ProfilePageComponent},
  {path: 'events' , component: EventsComponent},
  {path: 'past-events' , component: PastEventsComponent},
  {path: 'upcoming-events' , component: UpcomingEventsComponent },
  {path: 'interests' , component: InterestsComponent},
  {path: 'event-display' , component: EventDisplayComponent},
  {path: 'about-page' , component: AboutPageComponent},
  {path: 'contact-us' , component:  ContactUsComponent},
  {path: 'become-a-speaker' , component: BecomeASpeakerComponent},
  {path: 'venue-partner' , component: VenuePartnerComponent},
  {path: 'sponsor' , component: SponsorComponent},
  {path: 'partner' , component: PartnerComponent},
  {path: 'volunteer' , component: VolunteerComponent},
  {path: 'communities' , component: CommunitiesComponent},
  {path: 'comunev' , component: ComunevPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent];
